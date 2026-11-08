import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Loader2, Settings, Zap, Key } from 'lucide-react';
import useFacebookPixel from '../../hooks/useFacebookPixel';
import { getBotResponse, STAGES } from './messages';
import { useToast } from '../ui/use-toast';
import { useSettings } from '../../SettingsContext';
import { getOpenAIResponse } from '../../lib/openaiClient';
import { useNavigate } from 'react-router-dom';
import OpenAIKeyForm from './OpenAIKeyForm';
import { trackChatBotEvent } from '../../lib/gtmClient';
import useGoogleAds from '../../hooks/useGoogleAds';
import { supabase } from '../../lib/customSupabaseClient';

const ChatBot = () => {
  const { language, t } = useLanguage();
  const { track, trackCustom } = useFacebookPixel();
  const { trackChatBotLead } = useGoogleAds();
  const { toast } = useToast();
  const { apiKey, saveApiKey, testConnection } = useSettings();
  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [stage, setStage] = useState(STAGES.GREETING);
  const [userData, setUserData] = useState({});
  const messagesEndRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize chat
  useEffect(() => {
    if (messages.length === 0) {
      addBotMessage(getBotResponse(STAGES.GREETING, language, userData));
    }
  }, [language]);

  // Track chat open/close state
  useEffect(() => {
    if (isOpen) {
      trackChatBotEvent('open');
    } else if (messages.length > 1) { // Only track close if there was interaction
      trackChatBotEvent('close');
    }
  }, [isOpen]);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, stage, isSubmitting]);

  const addBotMessage = (response) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        text: response.text,
        options: response.options
      }]);
    }, 1000);
  };

  const addAiMessage = async (userText) => {
     setIsTyping(true);
     try {
       const conversationHistory = messages.map(m => ({
          type: m.type,
          text: m.text
       }));
       conversationHistory.push({ type: 'user', text: userText });

       const systemPrompt = language === 'fr' 
          ? "Tu es un assistant expert pour Isolation QC, une entreprise d'isolation de greniers au Québec..."
          : "You are an expert assistant for Isolation QC, an attic insulation company in Quebec...";

       const aiResponseText = await getOpenAIResponse(apiKey, conversationHistory, systemPrompt);
       
       setIsTyping(false);
       setMessages(prev => [...prev, {
         id: Date.now(),
         type: 'bot',
         text: aiResponseText,
         options: [] 
       }]);

       trackChatBotEvent('message_received', 'AI_Response');

     } catch (error) {
       console.error("AI Error", error);
       setIsTyping(false);
       setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        text: language === 'fr' ? "Désolé, je rencontre des difficultés techniques..." : "Sorry, I'm having technical difficulties...",
        options: [] 
      }]);
     }
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      text: text
    }]);
    trackChatBotEvent('message_sent', 'User_Message');
  };

  const validateInput = (value, currentStage) => {
    if (currentStage === STAGES.PHONE) {
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      return phoneRegex.test(value);
    }
    if (currentStage === STAGES.EMAIL) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    }
    return value.trim().length > 0;
  };

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;

    addUserMessage(text);
    setInputValue('');
    
    if (apiKey && stage === STAGES.CONFIRMATION) {
         addAiMessage(text);
    } else {
        processConversation(text);
    }
  };

  const processConversation = (text) => {
    let nextStage = stage;
    let nextData = { ...userData };
    let isValid = true;

    if (stage === STAGES.OPENAI_SETUP) {
        if (apiKey) {
            setStage(STAGES.CONFIRMATION);
            addAiMessage(text);
        } else {
            handleSkipKey();
        }
        return;
    }

    switch (stage) {
      case STAGES.GREETING:
        nextStage = STAGES.PROPERTY_TYPE;
        break;
      case STAGES.PROPERTY_TYPE:
        nextData.propertyType = text;
        nextStage = STAGES.PROBLEM_TYPE;
        break;
      case STAGES.PROBLEM_TYPE:
        nextData.problem = text;
        nextStage = STAGES.ATTIC_SIZE;
        break;
      case STAGES.ATTIC_SIZE:
        nextData.size = text;
        nextStage = STAGES.URGENCY;
        break;
      case STAGES.URGENCY:
        nextData.urgency = text;
        nextStage = STAGES.NAME;
        break;
      case STAGES.NAME:
        if (validateInput(text, STAGES.NAME)) {
          nextData.name = text;
          nextStage = STAGES.PHONE;
        } else {
            addBotMessage({ text: language === 'fr' ? "Veuillez entrer un nom valide." : "Please enter a valid name.", options: [] });
            isValid = false;
        }
        break;
      case STAGES.PHONE:
        if (validateInput(text, STAGES.PHONE)) {
          nextData.phone = text;
          nextStage = STAGES.EMAIL;
        } else {
            addBotMessage({ text: language === 'fr' ? "Format de téléphone invalide." : "Invalid phone format.", options: [] });
            isValid = false;
        }
        break;
      case STAGES.EMAIL:
        if (validateInput(text, STAGES.EMAIL)) {
          nextData.email = text;
          nextStage = STAGES.ADDRESS;
        } else {
             addBotMessage({ text: language === 'fr' ? "Format courriel invalide." : "Invalid email format.", options: [] });
             isValid = false;
        }
        break;
      case STAGES.ADDRESS:
        if (validateInput(text, STAGES.ADDRESS)) {
          nextData.address = text;
          if (!apiKey) {
              nextStage = STAGES.OPENAI_SETUP;
          } else {
              nextStage = STAGES.CONFIRMATION;
          }
          completeLead(nextData);
        } else {
             addBotMessage({ text: language === 'fr' ? "Veuillez entrer une adresse." : "Please enter an address.", options: [] });
             isValid = false;
        }
        break;
      default:
        break;
    }

    if (isValid && nextStage !== stage) {
      setUserData(nextData);
      setStage(nextStage);
      addBotMessage(getBotResponse(nextStage, language, nextData));
    }
  };

  const handleSaveKey = async (key) => {
      const isValid = await testConnection(key);
      if (isValid) {
          saveApiKey(key);
          setStage(STAGES.CONFIRMATION);
          addBotMessage({ 
              text: language === 'fr' ? "Clé configurée avec succès! ✅ Je suis maintenant prêt à répondre à toutes vos questions complexes." : "Key configured successfully! ✅ I am now ready to answer all your complex questions.",
              options: []
          });
          return true;
      }
      return false;
  };

  const handleSkipKey = () => {
      setStage(STAGES.CONFIRMATION);
      addBotMessage(getBotResponse(STAGES.CONFIRMATION, language, userData));
  };

  const completeLead = async (data) => {
    setIsSubmitting(true);
    try {
      // Use Edge Function for Insert + Email (bypass RLS for anon user)
      const payload = {
        nom: data.name,
        telephone: data.phone,
        email: data.email,
        adresse: data.address,
        message: `ChatBot Lead: ${data.propertyType} - ${data.problem} - Size: ${data.size} - Urgency: ${data.urgency}`
      };

      const { data: resultData, error } = await supabase.functions.invoke('send-contact-emails', {
        body: payload
      });

      if (error || !resultData?.success) {
        throw new Error(error?.message || resultData?.error || "Failed to submit lead");
      }

      // 3. Tracking
      track('Lead', {
        content_name: 'ChatBot Lead',
        content_category: data.propertyType,
        user_data: { em: data.email, ph: data.phone },
        value: 0,
        currency: 'CAD'
      });
      trackCustom('ChatBotComplete', { urgency: data.urgency, problem: data.problem });
      trackChatBotEvent('lead_completed', data.propertyType);
      trackChatBotLead();

      toast({
        title: language === 'fr' ? "Demande reçue!" : "Request received!",
        description: language === 'fr' ? "Nous vous contacterons bientôt." : "We will contact you shortly.",
        className: "bg-green-600 text-white border-none"
      });
      
      addBotMessage({ 
        text: language === 'fr' ? "Merci! Votre demande a été transmise. Un expert vous contactera sous peu. 🚀" : "Thank you! Your request has been sent. An expert will contact you shortly. 🚀",
        options: [] 
      });

    } catch (e) {
      console.error("Complete Lead Error", e);
      addBotMessage({ 
        text: language === 'fr' ? "Une erreur est survenue lors de l'envoi. Veuillez réessayer." : "An error occurred during submission. Please try again.",
        options: [] 
      });
      // Allow retry by resetting state slightly or offering a retry button (simplified here to just show error)
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible d'envoyer la demande."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer group"
          >
            <MessageSquare size={28} className="group-hover:animate-pulse" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce"></span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 font-sans"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-primary-900 p-4 flex items-center justify-between text-white shadow-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-full relative">
                  <Bot size={24} />
                  <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border border-slate-900 ${apiKey ? 'bg-green-400' : 'bg-yellow-400'}`}></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Isolation QC Assistant</h3>
                  <div className="flex items-center gap-1">
                      {apiKey ? (
                          <span className="text-[10px] bg-green-500/20 px-1.5 py-0.5 rounded text-green-300 font-medium flex items-center gap-1 border border-green-500/30">
                              <Zap size={8} /> AI Active
                          </span>
                      ) : (
                          <span className="text-[10px] text-slate-300">Basic Mode</span>
                      )}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                    onClick={() => navigate('/admin')}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    title="Settings"
                >
                    <Settings size={18} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex max-w-[85%] gap-2 ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-col'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.type === 'user' ? 'bg-primary-100 text-primary-600' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {msg.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    
                    <div className="space-y-2 w-full">
                      <div className={`p-3.5 rounded-2xl text-sm shadow-sm leading-relaxed ${
                        msg.type === 'user' 
                          ? 'bg-primary-600 text-white rounded-tr-none ml-auto w-fit' 
                          : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none w-fit'
                      }`}>
                        {msg.text}
                      </div>
                      
                      {/* Quick Replies */}
                      {!apiKey && msg.options && msg.options.length > 0 && (
                         <div className="flex flex-wrap gap-2 mt-2">
                            {msg.options.map((opt, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleSend(opt.label)}
                                className="px-4 py-2 bg-white border border-primary-200 text-primary-700 text-xs font-semibold rounded-full hover:bg-primary-50 transition-colors shadow-sm active:scale-95"
                              >
                                {opt.label}
                              </button>
                            ))}
                         </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Render OpenAI Form if stage matches */}
              {stage === STAGES.OPENAI_SETUP && !isTyping && (
                  <OpenAIKeyForm onSave={handleSaveKey} onSkip={handleSkipKey} />
              )}

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                      <Bot size={16} className="text-slate-600" />
                   </div>
                   <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex gap-1 items-center">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                   </div>
                </motion.div>
              )}
              {isSubmitting && (
                  <div className="flex justify-center p-2">
                      <Loader2 className="animate-spin text-slate-400" size={20} />
                  </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 shrink-0">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2 items-center"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={language === 'fr' ? "Écrivez votre message..." : "Type your message..."}
                  className="flex-1 bg-slate-100 text-slate-900 placeholder-slate-400 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-sm"
                  disabled={stage === STAGES.OPENAI_SETUP || isSubmitting}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isSubmitting}
                  className="p-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-primary-500/20 active:scale-95"
                >
                  <Send size={18} />
                </button>
              </form>
              <div className="flex justify-between items-center mt-2 px-1">
                 <p className="text-[10px] text-slate-400">
                    Powered by Isolation QC AI {apiKey ? 'Turbo' : 'Basic'}
                 </p>
                 {!apiKey && stage === STAGES.CONFIRMATION && (
                     <button 
                        onClick={() => setStage(STAGES.OPENAI_SETUP)}
                        className="text-[10px] text-primary-500 hover:text-primary-700 font-medium flex items-center gap-1"
                     >
                        <Key size={10} />
                        {t('chatbot.openai.modify') || "Config AI"}
                     </button>
                 )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;