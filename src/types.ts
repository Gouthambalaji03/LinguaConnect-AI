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

// Fix: Moved AIStudio interface and window augmentation from src/App.tsx to avoid duplicate declarations.
export interface AIStudio {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}

declare global {
  interface Window {
    aistudio?: AIStudio;
  }
}
