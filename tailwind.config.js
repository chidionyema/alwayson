module.exports = {
  // Enable dark mode using the 'class' strategy
  darkMode: 'class', // or 'media' for OS-level preference

  // Extend Tailwind's default configuration
  theme: {
    extend: {
      // Example color extensions
      colors: {
        'custom-blue': '#0070f3',
        'custom-gray': {
          100: '#f7fafc',
          // Add more shades as needed
          900: '#1a202c',
        },
        // Define other colors as needed
      },
      // Example font family extension
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        // Define other font families as needed
      },
      // Example breakpoint extension
      screens: {
        'xs': '475px', // Add a custom breakpoint
        // Tailwind's default breakpoints are mobile first ('sm', 'md', 'lg', 'xl', '2xl')
      },
      // You can also extend other theme values like spacing, borderWidths, borderRadius, etc.
    },
  },

  // Variants allow you to customize how certain utilities behave for certain states
  variants: {
    extend: {
      // Here you can extend the behavior of existing utilities for different states
      // For example, enabling 'textColor' utilities for 'hover' and 'focus' states
      textColor: ['responsive', 'hover', 'focus', 'dark'],
      // Add other variants as needed
    },
  },

  // Plugins to add additional utilities, components, or custom variants
  plugins: [
    // Example: require('@tailwindcss/forms'),
    // Add plugins as needed
  ],

  // Future-proofing for upcoming Tailwind CSS changes
  future: {
    // Future changes that Tailwind might make go here
  },

  // Other configuration options...
};
