/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      backgroundImage: {
        'gradient-animated': 'linear-gradient(270deg, #8b5cf6, #3b82f6, #ec4899)', // violet, blue, pink
      },
      backgroundSize: {
        '300': '300% 300%',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}