import React from 'react';
import type { TranscriptEntry, ConversationStatus } from '../../types';
import { ConversationDisplay } from './ConversationDisplay';
import { StatusIndicator } from './StatusIndicator';
import { StopIcon } from '../../components/icons';

interface ConversationTaskProps {
    transcript: TranscriptEntry[];
    status: ConversationStatus;
    error: string | null;
    onStop: () => void;
}

export const ConversationTask: React.FC<ConversationTaskProps> = ({
    transcript,
    status,
    error,
    onStop
}) => {
  return (
    <>
      <ConversationDisplay transcript={transcript} />
      <footer className="p-4 border-t border-gray-700 flex flex-col items-center justify-center gap-4">
         <StatusIndicator status={status} error={error} />
         <button
           onClick={onStop}
           className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg"
           aria-label="Stop Conversation"
         >
           <StopIcon className="w-8 h-8 text-white"/>
         </button>
      </footer>
    </>
  );
};