/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        terminal: ['"VT323"', 'monospace'],
      },
      colors: {
        'terminal-green': '#00FF00',
        'terminal-dark': 'rgba(0, 0, 0, 0.85)',
      },
    },
  },
  plugins: [],
}
