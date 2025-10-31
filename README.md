# LinguaConnect AI 🗣️🤖

LinguaConnect AI is a web application designed to help users practice their language skills with a real-time AI conversation partner. Powered by Google's Gemini 2.5 Native Audio API, it provides an immersive and interactive learning experience. Users can select a language, choose a conversation topic, and start speaking directly with "Alex," their friendly AI tutor.

## ✨ Features

- **Real-Time Voice Conversation**: Engage in seamless, low-latency spoken conversations with an AI.
- **Multiple Language Support**: Practice a variety of languages, including English, Spanish, French, German, Italian, and Japanese.
- **Conversation Starters**: Kickstart your practice with predefined topics like ordering at a cafe or discussing hobbies.
- **Live Transcription**: View a real-time transcript of the conversation, showing both your speech and the AI's responses.
- **Intelligent Tutoring**: The AI provides gentle, in-context corrections and asks open-ended questions to keep the conversation flowing.
- **Modern & Responsive UI**: A clean and intuitive interface built with React and Tailwind CSS that works on any device.

## 🚀 Getting Started (Local Development)

1.  **Clone the repository**: `git clone https://github.com/your-username/linguaconnect-ai.git`
2.  **Install dependencies**: `npm install`
3.  **Create a `.env.local` file** in the root of the project.
4.  **Add your API key** to the file: `VITE_GEMINI_API_KEY=your_api_key_here`
5.  **Run the development server**: `npm run dev`
6.  **Grant Permissions**: Your browser will ask for permission to use your microphone. Please allow this to enable the conversation feature.

## 🚀 Deployment to Vercel

Follow these steps to deploy your application to Vercel.

### 1. Push to GitHub
Push your project to a GitHub repository.

### 2. Import Project on Vercel
- Go to your Vercel Dashboard.
- Click "Add New..." -> "Project".
- Import the GitHub repository you just created. Vercel will automatically detect that it's a Vite project.

### 3. Configure Environment Variable
This is the most important step to fix the deployment error.
- In your new Vercel project's settings, navigate to the **Environment Variables** section.
- Add a new variable with the following details:
    - **Name**: `VITE_GEMINI_API_KEY`
    - **Value**: Paste your Google Gemini API key here.
- Click "Save".

### 4. Deploy
- Trigger a new deployment from the Vercel dashboard.
- Vercel will now build your project with the API key you provided. Your app should deploy successfully!

## 📁 Project Structure

The codebase is organized into a modular, task-oriented structure for clarity and maintainability.

```
/
├── src/
│   ├── components/         # Reusable UI components (e.g., icons).
│   ├── hooks/              # Custom React hooks (e.g., useGeminiLive).
│   ├── tasks/              # Task-oriented component modules.
│   ├── App.tsx             # Main application component.
│   ├── constants.ts        # App-wide constants.
│   ├── types.ts            # TypeScript definitions.
│   ├── index.css           # Tailwind CSS entry point.
│   └── index.tsx           # Main React entry point.
├── index.html              # Vite entry point.
├── package.json            # Project dependencies and scripts.
├── vite.config.ts          # Vite build configuration.
└── README.md               # You are here!
```
