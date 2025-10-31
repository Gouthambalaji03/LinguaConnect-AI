# LinguaConnect AI 🗣️🤖

LinguaConnect AI is a web application designed to help users practice their language skills with a real-time AI conversation partner. Powered by Google's Gemini 2.5 Native Audio API, it provides an immersive and interactive learning experience. Users can select a language, choose a conversation topic, and start speaking directly with "Alex," their friendly AI tutor.

## ✨ Features

- **Real-Time Voice Conversation**: Engage in seamless, low-latency spoken conversations with an AI.
- **Multiple Language Support**: Practice a variety of languages, including English, Spanish, French, German, Italian, and Japanese.
- **Conversation Starters**: Kickstart your practice with predefined topics like ordering at a cafe or discussing hobbies.
- **Live Transcription**: View a real-time transcript of the conversation, showing both your speech and the AI's responses.
- **Intelligent Tutoring**: The AI provides gentle, in-context corrections and asks open-ended questions to keep the conversation flowing.
- **Modern & Responsive UI**: A clean and intuitive interface built with React and Tailwind CSS that works on any device.
- **Microphone Integration**: Utilizes the browser's microphone for real-time audio input.

## 🚀 Getting Started

This application is designed to run in an environment that provides the Google AI Studio SDK.

1.  **Select an API Key**: When the application loads, you will be prompted to select a Google Gemini API key. This is required to connect to the service.
2.  **Grant Permissions**: Your browser will ask for permission to use your microphone. Please allow this to enable the conversation feature.
3.  **Select Language & Topic**: Choose the language you want to practice and a conversation starter topic.
4.  **Start Practicing**: Click the "Start Practicing" button and begin your conversation with Alex!

## 📁 Project Structure

The codebase is organized into a modular, task-oriented structure for clarity and maintainability.

```
/
├── components/
│   └── icons.tsx           # Reusable SVG icon components.
├── hooks/
│   └── useGeminiLive.ts    # Custom hook for all Gemini Live API logic.
├── tasks/
│   ├── conversation/       # Components for the active conversation view.
│   └── language-selection/ # Components for the initial setup screen.
├── App.tsx                 # Main application component and state management.
├── constants.ts            # App-wide constants (languages, topics).
├── types.ts                # TypeScript type definitions.
├── index.html              # The main HTML entry point for the application.
├── index.tsx               # The main React entry point.
└── README.md               # You are here!
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or find a bug, please feel free to open an issue or submit a pull request.