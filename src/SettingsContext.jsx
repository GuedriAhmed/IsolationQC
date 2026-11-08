import React, { createContext, useContext, useState, useEffect } from 'react';
import { testOpenAIConnection } from './lib/openaiClient';
import { useToast } from './components/ui/use-toast';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Load key from localStorage on mount
    const storedKey = localStorage.getItem('openai_api_key');
    if (storedKey) {
      setApiKey(storedKey);
    }
    setIsLoading(false);
  }, []);

  const saveApiKey = (key) => {
    localStorage.setItem('openai_api_key', key);
    setApiKey(key);
    toast({
      title: "Succès / Success",
      description: "Clé OpenAI configurée / OpenAI Key configured ✅",
      className: "bg-green-600 text-white border-none"
    });
  };

  const deleteApiKey = () => {
    localStorage.removeItem('openai_api_key');
    setApiKey('');
    toast({
      title: "Supprimé / Deleted",
      description: "Clé API supprimée / API Key removed.",
      className: "bg-slate-800 text-white border-none"
    });
  };

  const testConnection = async (keyToTest = apiKey) => {
    try {
      await testOpenAIConnection(keyToTest);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <SettingsContext.Provider value={{ apiKey, saveApiKey, deleteApiKey, testConnection, isLoading }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);