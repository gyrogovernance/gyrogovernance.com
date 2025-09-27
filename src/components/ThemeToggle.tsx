'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, actualTheme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getThemeIcon = () => {
    if (theme === 'system') {
      return (
        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      );
    } else if (actualTheme === 'light') {
      return (
        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      );
    } else {
      return (
        <svg className="h-4 w-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      );
    }
  };

  const getThemeLabel = () => {
    if (theme === 'system') {
      return 'System';
    } else if (theme === 'light') {
      return 'Light';
    } else {
      return 'Dark';
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative inline-flex h-8 w-8 items-center justify-center rounded-full
                 bg-gradient-to-br from-blue-400 to-blue-500
                 hover:from-blue-500 hover:to-blue-600
                 dark:from-gray-600 dark:to-gray-700
                 dark:hover:from-gray-500 dark:hover:to-gray-600
                 transition-all duration-300 focus:outline-none focus:ring-2
                 focus:ring-blue-300 dark:focus:ring-gray-400
                 hover:scale-110 active:scale-95"
      aria-label={`Switch to ${getThemeLabel()} mode`}
      title={`Current: ${getThemeLabel()} mode (click to cycle through light → dark → system)`}
    >
      {getThemeIcon()}
    </button>
  );
}