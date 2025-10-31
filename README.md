# LinguaConnect AI 🗣️🤖

LinguaConnect AI is a web application designed to help users practice their language skills with a real-time AI conversation partner. Powered by Google's Gemini 2.5 Native Audio API, it provides an immersive and interactive learning experience. Users can select a language, choose a conversation topic, and start speaking directly with "Alex," their friendly AI tutor.

## ✨ Features

- **Real-Time Voice Conversation**: Engage in seamless, low-latency spoken conversations with an AI.
- **Multiple Language Support**: Practice a variety of languages, including English, Spanish, French, German, Italian, and Japanese.
- **Conversation Starters**: Kickstart your practice with predefined topics like ordering at a cafe or discussing hobbies.
- **Live Transcription**: View a real-time transcript of the conversation, showing both your speech and the AI's responses.
- **Intelligent Tutoring**: The AI provides gentle, in-context corrections and asks open-ended questions to keep the conversation flowing.
- **Modern & Responsive UI**: A clean and intuitive interface built with React and Tailwind CSS that works on any device.

---

## 🛠️ Local Development

To run this project on your local machine, follow these steps:

1.  **Install Dependencies**:
    Open your terminal and run the following command to install the necessary packages:
    ```bash
    npm install
    ```

2.  **Set Up API Key**:
    Create a new file named `.env.local` in the root of your project and add your Google Gemini API key to it:
    ```
    API_KEY=YOUR_API_KEY_HERE
    ```

3.  **Run the Development Server**:
    Start the Vite development server with this command:
    ```bash
    npm run dev
    ```
    The application will now be running at `http://localhost:5173` (or the next available port).

---

## 🚀 Deployment to Vercel

To deploy this application to Vercel, follow these steps:

1.  **Push to GitHub**:
    Ensure your project is pushed to a GitHub repository.

2.  **Import Project in Vercel**:
    -   Log in to your Vercel account.
    -   Click "Add New..." -> "Project".
    -   Import your GitHub repository. Vercel will automatically detect that it's a Vite project.

3.  **Configure Environment Variable**:
    -   In the project configuration screen, navigate to the "Environment Variables" section.
    -   Add a new variable:
        -   **Name**: `API_KEY`
        -   **Value**: Paste your Google Gemini API key here.

4.  **Deploy**:
    Click the "Deploy" button. Vercel will build and deploy your application.