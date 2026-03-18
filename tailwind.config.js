/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00577D',
          50:  '#e6f4f9',
          100: '#b3dded',
          200: '#80c6e2',
          300: '#4dafdc',
          400: '#1a98d0',
          500: '#0077AA',
          600: '#00577D',
          700: '#003d5c',
          800: '#00243a',
          900: '#000b18',
        },
        gold: {
          DEFAULT: '#EFC900',
          light: '#f7e24d',
          dark:  '#c9a800',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out both',
        'fade-in': 'fadeIn 0.4s ease-out both',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
