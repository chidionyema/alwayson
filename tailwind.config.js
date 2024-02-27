// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' based on your preference
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        gray: {
          50: '#f7fafc',
          100: '#edf2f7',
          200: '#e2e8f0',
          300: '#cbd5e0',
          400: '#a0aec0',
          500: '#718096',
          600: '#4a5568',
          700: '#2d3748',
          800: '#1a202c',
          900: '#171923',
        },
        green: {
          500: '#48bb78',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
