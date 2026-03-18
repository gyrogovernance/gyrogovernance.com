import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'classic-blue': '#007aff',
        'classic-purple': '#af52de',
        'classic-pink': '#ff2d70',
      },
      fontFamily: {
        'nunito': ['var(--font-nunito)', 'sans-serif'],
      },
      fontWeight: {
        'normal': '500',
        'medium': '500',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;