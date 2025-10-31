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

// Fix: Add AIStudio interface to support API key selection.
export interface AIStudio {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}

// Fix: Add global declaration for window.aistudio to resolve type errors.
declare global {
  interface Window {
    aistudio?: AIStudio;
  }
}
