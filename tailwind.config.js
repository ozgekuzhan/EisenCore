/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00d4ff',
          dark: '#00a8cc',
        },
        secondary: {
          DEFAULT: '#fbbf24',
          dark: '#f59e0b',
        },
        dark: {
          DEFAULT: '#1a2332',
          lighter: '#2d3748',
        }
      },
    },
  },
  plugins: [],
}
