import React, { useState, useMemo, useEffect } from 'react';
import { useGeminiLive } from './hooks/useGeminiLive';
import { SUPPORTED_LANGUAGES, getSystemInstruction, CONVERSATION_TOPICS } from './constants';
import type { Language, Topic } from './types';
import { LanguageSelectionTask } from './tasks/language-selection/LanguageSelectionTask';
import { ConversationTask } from './tasks/conversation/ConversationTask';

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(SUPPORTED_LANGUAGES[0]);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [apiKeySelected, setApiKeySelected] = useState(false);

  const systemInstruction = useMemo(() => getSystemInstruction(selectedLanguage.name, selectedTopic?.prompt), [selectedLanguage, selectedTopic]);
  const { status, transcript, error, startSession, stopSession } = useGeminiLive(systemInstruction);

  const isConversationActive = status === 'connecting' || status === 'listening' || status === 'error';

  useEffect(() => {
    const checkApiKey = async () => {
      try {
        if (window.aistudio) {
          const hasKey = await window.aistudio.hasSelectedApiKey();
          setApiKeySelected(hasKey);
        }
      } catch (e) {
        console.error("Failed to check for API key", e);
      }
    };
    checkApiKey();
  }, []);

  useEffect(() => {
    if (error && (error.includes('An API Key must be set') || error.includes('Requested entity was not found'))) {
      setApiKeySelected(false);
    }
  }, [error]);

  const handleSelectApiKey = async () => {
    try {
      if (window.aistudio) {
        await window.aistudio.openSelectKey();
        // Assume success to avoid race condition and allow user to proceed.
        setApiKeySelected(true);
      }
    } catch (e) {
        console.error("Failed to open API key selection", e);
    }
  };

  const handleStartConversation = () => {
    if (!selectedTopic || !apiKeySelected) return;
    startSession();
  };
  
  const handleStopConversation = () => {
    stopSession();
    // Do not reset the topic, so the user can restart the same scenario easily.
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-2xl h-full flex flex-col bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <header className="p-4 border-b border-gray-700 text-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">LinguaConnect AI</h1>
          <p className="text-sm text-gray-400">Your AI Language Practice Partner</p>
        </header>

        {!isConversationActive ? (
          <LanguageSelectionTask 
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            onStart={handleStartConversation}
            topics={CONVERSATION_TOPICS}
            selectedTopic={selectedTopic}
            onTopicSelect={setSelectedTopic}
            apiKeySelected={apiKeySelected}
            onSelectApiKey={handleSelectApiKey}
          />
        ) : (
          <ConversationTask 
            transcript={transcript}
            status={status}
            error={error}
            onStop={handleStopConversation}
          />
        )}
      </div>
    </div>
  );
}
