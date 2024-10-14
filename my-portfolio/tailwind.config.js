/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes:{
        progress: {
          '0%': { width: '0', opacity: '1' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        progress: 'progress 0.8s ease-in-out forwards',
      }
    },
  },
  plugins: [],
};
