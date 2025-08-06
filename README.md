
# 🧠 AIResuma – AI-Powered Resume Analyzer

**AIResuma** is a fully client-side, AI-powered resume analyzer built using React, TypeScript, Zustand, Tailwind CSS, and Puter.js. It helps job seekers optimize their resumes for ATS (Applicant Tracking System) performance by providing personalized AI feedback and scoring based on tone, structure, skills, and relevance — all with no backend required.

## ✨ Features

- 🔐 **Authentication** – Seamless sign-in using Puter.js (OAuth-based)
- 📄 **Resume Upload** – Upload PDF resumes directly from the browser
- ⚙️ **AI Scoring Engine** – Scores resumes on:
  - Tone & Style
  - Content Relevance
  - Structure & Formatting
  - Skills Match
- 📊 **ATS Score Simulation** – Simulates recruiter-like scoring (0–100)
- 📁 **Cloud Storage** – Resume stored via Puter’s privacy-first virtual FS
- 💾 **Global State Management** – Powered by Zustand for minimal boilerplate
- 🧩 **Responsive UI** – Designed with Tailwind CSS for all screen sizes
- 🔄 **Real-Time Feedback** – AI feedback and improvement suggestions shown instantly

## 🛠️ Tech Stack

| Category           | Tech Stack                         |
|--------------------|------------------------------------|
| Frontend           | React, TypeScript, Tailwind CSS    |
| Routing            | React Router v7                    |
| State Management   | Zustand                            |
| File Handling & AI | Puter.js                           |
| Build Tool         | Vite                               |
| Deployment         | Vercel    |

## 🧩 Architecture Overview

```
src/
│
├── components/         # UI components (ScoreCard, Loader, etc.)
├── pages/              # Route-based views (Upload, ResumeView)
├── store/              # Zustand store for global state
├── lib/                # Puter.js auth and API logic
├── App.tsx             # Route config and layout
└── main.tsx            # App entry point
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Dhruvkus-14/AIResuma.git
cd airesuma
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

## 🔐 Authentication & Storage

- All user authentication and file storage is handled by [Puter.js](https://puter.com/docs).
- No backend server is used.
- All resume files are stored in the user’s virtual cloud via Puter.

## 🧠 AI Integration

- AI scoring is done using `puter.ai.ask()`.
- The AI evaluates the resume based on a smart prompt and returns structured feedback and scores.

## 📌 Limitations

- Only PDF resumes supported currently
- AI model used via Puter (e.g., GPT/Claude) is not fine-tuned
- Not a real ATS — this is a **Pre-ATS Optimizer**

## 🙋‍♂️ Motivation

I built AIResuma to help freshers and job seekers like myself get AI-powered resume feedback in a private, fast, and backend-free environment — while learning modern tech like Zustand and serverless APIs.

## 📸 Screenshots
![Output](/screenshots/1.jpg)
![Output](/screenshots/2.jpg)
![Output](/screenshots/3.jpg)
![Output](/screenshots/4.jpg)
![Output](/screenshots/5.jpg)


## 📄 License

MIT License

---

> Built with ❤️ by [Dhruv Kushwaha](https://github.com/Dhruvkus-14)