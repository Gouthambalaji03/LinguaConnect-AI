export interface Language {
  code: string;
  name: string;
}

export interface Topic {
  id: string;
  title: string;
  prompt: string;
}

export interface TranscriptEntry {
  speaker: 'user' | 'ai';
  text: string;
}

export type ConversationStatus = 'idle' | 'connecting' | 'listening' | 'error';