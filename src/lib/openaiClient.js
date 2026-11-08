/**
 * Utility functions for OpenAI API integration
 */

export const testOpenAIConnection = async (apiKey) => {
  if (!apiKey) throw new Error("Clé API manquante");

  try {
    const response = await fetch('https://api.openai.com/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Erreur de connexion');
    }

    return true;
  } catch (error) {
    throw error;
  }
};

export const getOpenAIResponse = async (apiKey, messages, systemPrompt = "") => {
  if (!apiKey) throw new Error("Clé API manquante");

  // Format messages for OpenAI
  // Ensure we have a system prompt if provided
  const formattedMessages = [
    ...(systemPrompt ? [{ role: "system", content: systemPrompt }] : []),
    ...messages.map(m => ({
      role: m.type === 'user' ? 'user' : 'assistant',
      content: m.text
    }))
  ];

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Cost-effective model
        messages: formattedMessages,
        max_tokens: 150,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Erreur API OpenAI');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw error;
  }
};