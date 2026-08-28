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
  '120px': '120px',
  '150px': '150px',
  '160px': '160px',
  '180px': '180px',
  '200px': '200px',
  '220px': '220px',
  '1200px': '1200px',
  '1400px': '1400px',
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
        '1400px': '1400px',
      },
      fontSize: {
        '10px': '10px',
        '12px': '12px',
        '11px': '11px',
        '13px': '13px',
        '14px': '14px',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
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
          '100': '#007acc',
        },
        vscode: {
          keyword: '#569cd6',
          string: '#ce9178',
          comment: '#6a9955',
          function: '#dcdcaa',
          type: '#4ec9b0',
          accent: '#3794ff',
          orange: '#f0883e',
          green: '#3fb950',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
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
