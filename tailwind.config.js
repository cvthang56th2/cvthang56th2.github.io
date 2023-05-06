const Space = {
  '1px': '1px',
  '2px': '2px',
  '4px': '4px',
  '6px': '6px',
  '10px': '10px',
  '12px': '12px',
  '13px': '13px',
  '14px': '14px',
  '16px': '16px',
  '50px': '50px',
  '100px': '100px',
  '150px': '150px',
  '160px': '160px',
  '200px': '200px',
  '220px': '220px',
  '1200px': '1200px',
  '70per': '70%'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: Space,
      minWidth: {
        '160px': '160px'
      },
      borderWidth: {
        '1px': '1px'
      },
      maxWidth: {
        '200px': '200px',
        '1200px': '1200px',
      },
      fontSize: {
        '10px': '10px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
      },
      colors: {
        'cool-gray': {
          '100': '#323233',
          '200': '#8e8e8e',
          '300': '#333333',
          '400': '#828182',
          '500': '#cccccc',
          '600': '#37375d',
          '700': '#252526',
          '800': '#1e1e1e',
          '900': '#2d2d2d',
          '1000': '#4d4d4d',
        },
        'custom-gray': {
          '100': '#3a3939',
          '200': '#404040',
          '300': '#37373d',
          '400': '#bbbbbb'
        },
        'teal': {
          '100': '#0086d2',
        },
      },
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
        slash: '-',
      }
    },
  },
  plugins: [],
}

