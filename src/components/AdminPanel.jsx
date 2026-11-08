import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSettings } from '../SettingsContext';
import { Save, Trash2, Wifi, Eye, EyeOff, Key, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const { apiKey, saveApiKey, deleteApiKey, testConnection } = useSettings();
  const [inputKey, setInputKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();

  // Simple hardcoded password for demo
  const DEMO_PASSWORD = "admin";

  useEffect(() => {
    if (apiKey) {
      setInputKey(apiKey);
    }
  }, [apiKey]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === DEMO_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Mot de passe incorrect");
    }
  };

  const handleSave = () => {
    if (!inputKey.trim()) return;
    saveApiKey(inputKey);
  };

  const handleTest = async () => {
    setIsTesting(true);
    await testConnection(inputKey);
    setIsTesting(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-100 rounded-full">
              <ShieldAlert size={48} className="text-primary-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6 text-slate-900">Accès Administrateur</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Mot de passe (admin)"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg active:scale-95"
            >
              Entrer
            </button>
          </form>
          <button 
            onClick={() => navigate('/')}
            className="w-full mt-4 text-slate-500 text-sm hover:text-slate-800"
          >
            Retour à l'accueil
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
            <div>
                <h1 className="text-4xl font-bold text-slate-900">Configuration</h1>
                <p className="text-slate-500 mt-2">Gérez les paramètres de l'assistant IA</p>
            </div>
            <button 
                onClick={() => navigate('/')}
                className="px-6 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
                Retour au site
            </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <Key size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Clé API OpenAI</h2>
                <p className="text-primary-100">Connectez l'assistant à l'intelligence artificielle</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Clé API (sk-...)</label>
              <div className="relative">
                <input
                  type={showKey ? "text" : "password"}
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  placeholder="sk-..."
                  className="w-full pl-6 pr-14 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all font-mono text-slate-600"
                />
                <button
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showKey ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Votre clé est stockée localement dans votre navigateur et n'est jamais partagée.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
              <button
                onClick={handleSave}
                disabled={!inputKey}
                className="flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary-500/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={18} />
                Sauvegarder
              </button>

              <button
                onClick={handleTest}
                disabled={!inputKey || isTesting}
                className="flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-semibold transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Wifi size={18} />
                {isTesting ? "Test en cours..." : "Tester la connexion"}
              </button>

              {apiKey && (
                <button
                  onClick={deleteApiKey}
                  className="flex items-center gap-2 px-8 py-3 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-xl font-semibold transition-all ml-auto active:scale-95"
                >
                  <Trash2 size={18} />
                  Réinitialiser
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;