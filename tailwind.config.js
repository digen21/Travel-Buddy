/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // App brand colors
        'primary': '#1A1A1A',
        'secondary': '#4A4A4A',
        'accent': '#DAA520',
        'background': '#F5F5DC',

        // Splash screen specific colors
        'splash-background': '#F5F5DC',
        'splash-accent': '#DAA520',
        'splash-app-name': '#1A1A1A',
        'splash-tagline': '#4A4A4A',
        'splash-heritage': '#1A1A1A',
      },
      fontFamily: {
        'playfair-display': ['PlayfairDisplay', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

