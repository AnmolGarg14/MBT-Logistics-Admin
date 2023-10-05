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
        "main-bg": "#2a3447",
        "soft-bg": "#384256",
        "dark-bg": "#222b3c",
        "soft-color": "#ddd",
        "dark-color": "#2a3447",
      },
    },
  },
  plugins: [],
};
