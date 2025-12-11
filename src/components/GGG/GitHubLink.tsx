'use client';

import GitHubIcon from '../icons/GitHubIcon';

export default function GitHubLink() {
  return (
    <div className="flex justify-center my-12">
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
    </div>
  );
}

