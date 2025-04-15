module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true, // Ensures Tailwind utilities override other CSS
  darkMode: 'class', // Enables dark mode via class strategy
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1C1C1C',
          secondary: '#1a1a1a',
        },
        gold: {
          primary: '#D4AF37',
          secondary: '#B89F65',
          accent: '#FFD700'
        },
        // Elegant Neutrals with Metallic Accents

        // Deep, Rich Hues
        rich: {
          background: '#0D1B2A',   // Deep Navy
          primary: '#1B3B6F',      // Deep Teal
          accent: '#7C0A02',       // Rich Burgundy
          secondary: '#F2E9E4',    // Cream
          metallic: '#B87333',     // Copper
        },
        // Soft Pastels with a Luxurious Twist
        pastel: {
          background: '#F8EDEB',   // Light Blush
          primary: '#FADCD9',      // Soft Pastel Pink
          secondary: '#E8DFF5',    // Light Lavender
          contrast: '#4C2A52',     // Deep Plum
          metallic: '#B76E79',     // Rose Gold
        },
      },
      fontFamily: {
        sans: ['Playfair Display', 'serif'],
        serif: ['Cinzel', 'serif'],
      },
      boxShadow: {
        'gold': '0 0 35px -5px rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}