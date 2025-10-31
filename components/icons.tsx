
import React from 'react';

export const MicrophoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zm0 12a5 5 0 0 1-5-5V5a5 5 0 0 1 10 0v6a5 5 0 0 1-5 5z" />
    <path d="M19 11a1 1 0 0 1 1 1v2a7 7 0 0 1-14 0v-2a1 1 0 1 1 2 0v2a5 5 0 0 0 10 0v-2a1 1 0 0 1 1-1z" />
    <path d="M12 19a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1zm0 2a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1z" />
  </svg>
);

export const StopIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 6h12v12H6z" />
  </svg>
);

export const BotIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm4 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.5-5H6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
  </svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);
