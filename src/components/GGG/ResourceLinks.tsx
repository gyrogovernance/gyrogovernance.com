'use client';

import GitHubIcon from '../icons/GitHubIcon';
import GoogleIcon from '../icons/GoogleIcon';

export default function ResourceLinks() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-12">
      <a
        href="https://github.com/gyrogovernance/tools?tab=readme-ov-file#ggg"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl no-underline"
        style={{ color: 'white', textDecoration: 'none' }}
        aria-label="View paper and code on GitHub (opens in new tab)"
      >
        <GitHubIcon className="w-6 h-6 mr-3" />
        View paper and code on GitHub
      </a>
      <a
        href="https://notebooklm.google.com/notebook/2ddf729a-f711-48e0-9542-5d8c6a1f0b27?authuser=1"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl no-underline"
        style={{ color: 'white', textDecoration: 'none' }}
        aria-label="Open in Google NotebookLM (opens in new tab)"
      >
        <GoogleIcon className="w-6 h-6 mr-3" />
        Open in NotebookLM
      </a>
    </div>
  );
}

