const { color } = require('motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // TSX, JSX, TS support
  ],
  theme: {
    extend: {
        color: {
            darkBg:'#1c1c1c',
        }
    },
  },
  plugins: [],
}
