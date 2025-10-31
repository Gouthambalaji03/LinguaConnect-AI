import React from 'react';
import { SUPPORTED_LANGUAGES } from '../../constants';
import type { Language } from '../../types';

export const LanguageSelector: React.FC<{
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
  disabled: boolean;
}> = ({ selectedLanguage, onLanguageChange, disabled }) => (
  <div className="relative">
    <select
      value={selectedLanguage.code}
      onChange={(e) => {
        const lang = SUPPORTED_LANGUAGES.find(l => l.code === e.target.value);
        if (lang) onLanguageChange(lang);
      }}
      disabled={disabled}
      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-50"
    >
      {SUPPORTED_LANGUAGES.map(lang => (
        <option key={lang.code} value={lang.code}>{lang.name}</option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
  </div>
);
