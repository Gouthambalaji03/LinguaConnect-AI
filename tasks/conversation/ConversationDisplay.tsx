import React, { useEffect, useRef } from 'react';
import type { TranscriptEntry } from '../../types';
import { TranscriptItem } from './TranscriptItem';

export const ConversationDisplay: React.FC<{ transcript: TranscriptEntry[] }> = ({ transcript }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [transcript]);

    return (
        <div ref={scrollRef} className="flex-1 w-full p-4 md:p-6 space-y-6 overflow-y-auto">
            {transcript.length === 0 ? (
                 <div className="text-center text-gray-400 pt-16">
                    <p className="text-lg">The conversation will appear here.</p>
                    <p>Start speaking to your AI tutor!</p>
                </div>
            ) : (
                transcript.map((entry, index) => <TranscriptItem key={index} entry={entry} />)
            )}
        </div>
    );
};
