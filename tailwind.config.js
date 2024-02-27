module.exports = {
  darkMode: 'class', // or 'media' based on your preference

  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        gray: {
          50: '#F7F7F7',  // Lighter for backgrounds
          100: '#E1E1E1', // Light gray for borders
          200: '#CFCFCF', // Subtle difference for UI elements
          300: '#B1B1B1', // Disabled state or hints
          400: '#9E9E9E', // Icons and passive elements
          500: '#7E7E7E', // Default text
          600: '#626262', // Headings and important text
          700: '#515151', // Heavier emphasis
          800: '#3B3B3B', // Very strong emphasis or active elements
          900: '#222222', // Ultra dark for deep contrast
        },
        green: {
          500: '#34C759', // Fresh, vibrant green for buttons or icons
        },
        // Consider adding a custom palette that reflects a modern aesthetic
        // For instance, a soft blue or a vibrant accent color for interactive elements
        blue: {
          500: '#007AFF', // iOS system blue
        },
      },
      boxShadow: {
        // Soft, subtle shadows for popovers, modals, etc.
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      // Add more utilities for spacing, sizes, etc., to match the Apple aesthetic of ample whitespace
      spacing: {
        // Example custom spacing
        128: '32rem',
      },
    },
  },
  variants: {
    extend: {
      // Extend variants as needed for your design
    },
  },
  plugins: [],
};
