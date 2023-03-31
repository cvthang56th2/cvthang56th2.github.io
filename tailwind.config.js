/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
        slash: '-',
      }
    },
  },
  plugins: [],
}

