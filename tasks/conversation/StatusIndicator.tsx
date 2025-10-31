import React from 'react';
import type { ConversationStatus } from '../../types';

export const StatusIndicator: React.FC<{ status: ConversationStatus; error: string | null }> = ({ status, error }) => {
    let content;
    switch (status) {
        case 'connecting':
            content = <><div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mr-2"></div><span>Connecting...</span></>;
            break;
        case 'listening':
            content = <><div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div><span>Listening...</span></>;
            break;
        case 'error':
            content = <><div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div><span className="text-red-400">{error || 'An error occurred'}</span></>;
            break;
        default:
            return null;
    }
    return <div className="flex items-center justify-center text-sm text-gray-300 h-6">{content}</div>;
};
