import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const meta = () => ([
  { title: "Resumind | Resume Analyzer" },
  { name: "description", content: "Log in to analyze and optimize your resume with AI." },
]);

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next || "/dashboard");
  }, [auth.isAuthenticated, next]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#f4f4f5] to-[#e0e7ff] dark:from-[#0f0f0f] dark:to-[#1e1e2e] px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 space-y-6 text-center border border-gray-200 dark:border-gray-700">
        
        {/* Resume Preview Mockup */}
        <div className="relative">
          <div className="w-full h-36 rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-left shadow-inner border border-gray-300 dark:border-gray-700">
            <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
            <div className="w-1/2 h-3 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
          <span className="absolute -top-3 right-3 text-sm bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 px-2 py-0.5 rounded-full shadow">
            Preview Resume
          </span>
        </div>

        {/* Branding and Title */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            <span className="text-indigo-600">Welcome to  AIResuma</span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            AI-powered resume analyzer for better job outcomes.
          </p>
        </div>

        {/* Auth Action */}
        <div>
          {isLoading ? (
            <button
              disabled
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium animate-pulse shadow"
            >
              Scanning...
            </button>
          ) : auth.isAuthenticated ? (
            <button
              onClick={auth.signOut}
              className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={auth.signIn}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition shadow"
            >
              Log In to Start Analyzing
            </button>
          )}
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Your data is secure. We do not store resumes without permission.
        </p>
      </div>
    </main>
  );
};

export default Auth;
