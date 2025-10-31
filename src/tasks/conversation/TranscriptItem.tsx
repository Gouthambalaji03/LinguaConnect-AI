import React from 'react';
import type { TranscriptEntry } from '../../types';
import { BotIcon, UserIcon } from '../../components/icons';

export const TranscriptItem: React.FC<{ entry: TranscriptEntry }> = ({ entry }) => {
  const isUser = entry.speaker === 'user';
  return (
    <div className={`flex items-start gap-4 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && <BotIcon className="w-8 h-8 flex-shrink-0 text-blue-400 mt-1" />}
      <div className={`max-w-xl p-4 rounded-2xl ${isUser ? 'bg-blue-600 rounded-br-none' : 'bg-gray-700 rounded-bl-none'}`}>
        <p className="text-white">{entry.text}</p>
      </div>
       {isUser && <UserIcon className="w-8 h-8 flex-shrink-0 text-gray-400 mt-1" />}
    </div>
  );
};