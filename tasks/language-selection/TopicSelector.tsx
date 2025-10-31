import React from 'react';
import type { Topic } from '../../types';

interface TopicSelectorProps {
    topics: Topic[];
    selectedTopic: Topic | null;
    onTopicSelect: (topic: Topic) => void;
    disabled: boolean;
}

export const TopicSelector: React.FC<TopicSelectorProps> = ({ topics, selectedTopic, onTopicSelect, disabled }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topics.map(topic => (
                <button
                    key={topic.id}
                    onClick={() => onTopicSelect(topic)}
                    disabled={disabled}
                    className={`p-3 text-left rounded-lg border-2 transition-all duration-200 text-sm font-medium
                        ${selectedTopic?.id === topic.id 
                            ? 'bg-blue-500 border-blue-400 shadow-md ring-2 ring-blue-300' 
                            : 'bg-gray-700 border-gray-600'
                        }
                        ${disabled 
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-gray-600 hover:border-gray-500'
                        }`}
                >
                    {topic.title}
                </button>
            ))}
        </div>
    );
};