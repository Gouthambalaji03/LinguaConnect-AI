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

## 🛠️ How It Works

The application is built using a modern frontend stack and leverages the power of the Gemini Live API for its core functionality.

- **Frontend**: The user interface is built with **React** and **TypeScript** for a robust and type-safe component-based architecture. **Tailwind CSS** is used for styling.
- **AI & Audio Processing**: The `useGeminiLive` custom hook encapsulates all interaction with the **Gemini 2.5 Native Audio API**. It handles:
  1. Establishing a secure, real-time connection.
  2. Capturing microphone audio using the Web Audio API.
  3. Encoding and streaming the audio to the Gemini API.
  4. Receiving, decoding, and playing back the AI's audio response.
  5. Processing live transcriptions for both the user and the AI.

## 🚀 Getting Started

To run this project locally, you will need a modern web browser and a Gemini API key.

### Prerequisites

- A Google Gemini API key.
- A local web server to serve the static files.

### Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **API Key Configuration:**
    This application requires your Google Gemini API key to be available as an environment variable named `API_KEY` in the context where the application is served. The application is configured to access this key directly via `process.env.API_KEY`.

3.  **Serve the application:**
    Since this project is set up without a build step, you can serve the files using any simple static server.

    For example, using Python's built-in server:
    ```bash
    python -m http.server
    ```
    Or, using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in Visual Studio Code.

4.  **Open in Browser:**
    Navigate to the local server address (e.g., `http://localhost:8000`). The application will load, and you will be prompted to grant microphone permissions.

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
├── index.html              # The main HTML entry point.
├── index.tsx               # The main React entry point.
├── metadata.json           # Application metadata and permissions.
└── README.md               # You are here!
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or find a bug, please feel free to open an issue or submit a pull request.
