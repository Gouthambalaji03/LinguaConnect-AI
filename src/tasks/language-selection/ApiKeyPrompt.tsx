import React from 'react';

// Fix: Implement a proper API key prompt component.
interface ApiKeyPromptProps {
    apiKeySelected: boolean;
    onSelectApiKey: () => void;
}

export const ApiKeyPrompt: React.FC<ApiKeyPromptProps> = ({ apiKeySelected, onSelectApiKey }) => {
    if (apiKeySelected) {
        return null;
    }

    return (
        <div className="w-full max-w-md p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg text-center mb-6" role="alert">
            <h3 className="font-semibold text-yellow-300 mb-2">API Key Required</h3>
            <p className="text-sm text-yellow-400 mb-4">
                Please select your Google Gemini API key to start the conversation.
            </p>
            <button
                onClick={onSelectApiKey}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold text-sm transition-colors"
            >
                Select API Key
            </button>
            <p className="text-xs text-gray-500 mt-3">
                For billing info, see the <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">documentation</a>.
            </p>
        </div>
    );
};
