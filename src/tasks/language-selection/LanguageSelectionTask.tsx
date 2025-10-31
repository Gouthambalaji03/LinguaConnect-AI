import React from 'react';
import type { Language, Topic } from '../../types';
import { LanguageSelector } from './LanguageSelector';
import { TopicSelector } from './TopicSelector';
// Fix: Import the ApiKeyPrompt component.
import { ApiKeyPrompt } from './ApiKeyPrompt';
import { MicrophoneIcon } from '../../components/icons';

interface LanguageSelectionTaskProps {
    selectedLanguage: Language;
    onLanguageChange: (language: Language) => void;
    onStart: () => void;
    topics: Topic[];
    selectedTopic: Topic | null;
    onTopicSelect: (topic: Topic) => void;
    // Fix: Add props for API key handling.
    apiKeySelected: boolean;
    onSelectApiKey: () => void;
}

export const LanguageSelectionTask: React.FC<LanguageSelectionTaskProps> = ({
    selectedLanguage,
    onLanguageChange,
    onStart,
    topics,
    selectedTopic,
    onTopicSelect,
    // Fix: Destructure API key props.
    apiKeySelected,
    onSelectApiKey,
}) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6 overflow-y-auto">
      {/* Fix: Display the API key prompt. */}
      <ApiKeyPrompt apiKeySelected={apiKeySelected} onSelectApiKey={onSelectApiKey} />
      
      {/* Fix: Disable controls until API key is selected. */}
      <fieldset disabled={!apiKeySelected} className="w-full max-w-md space-y-6 contents">
        <div className="w-full max-w-md space-y-2">
            <h2 className="text-lg font-semibold text-center text-gray-300">1. Select a language to practice</h2>
            <LanguageSelector
                selectedLanguage={selectedLanguage}
                onLanguageChange={onLanguageChange}
                disabled={!apiKeySelected}
            />
        </div>

        <div className="w-full max-w-md space-y-3">
            <h2 className="text-lg font-semibold text-center text-gray-300">2. Choose a conversation starter</h2>
            <TopicSelector
                topics={topics}
                selectedTopic={selectedTopic}
                onTopicSelect={onTopicSelect}
                disabled={!apiKeySelected}
            />
        </div>
        
        <button
            onClick={onStart}
            disabled={!selectedTopic || !apiKeySelected}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg disabled:bg-gray-600 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
            <MicrophoneIcon className="w-6 h-6"/>
            Start Practicing
        </button>
      </fieldset>
    </div>
  );
};
