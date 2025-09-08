/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E5E3A',
        secondary: '#D9C9A3',
        accent: '#2A6F97',
        neutral: {
          50: '#F7F5F0',
          900: '#3C3C3C'
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Roboto', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out'
      }
    },
  },
  plugins: [],
};