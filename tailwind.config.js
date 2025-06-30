/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors: {
        primary: {
          DEFAULT: '#e74c3c',
          light: '#ec7063',
          dark: '#c0392b',
        },
        secondary: {
          DEFAULT: '#3498db',
          light: '#5dade2',
          dark: '#2980b9',
        },
        accent: {
          DEFAULT: '#2ecc71',
          light: '#58d68d',
          dark: '#27ae60',
        },
        creative: {
          purple: '#9b59b6',
          pink: '#e91e63',
          orange: '#f39c12',
          teal: '#1abc9c',
          indigo: '#3f51b5',
        },
        dark: '#2c3e50',
        light: '#ffffff',
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
fontFamily: {
        display: ['Space Grotesk', 'Montserrat', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        creative: ['Fredoka One', 'Comfortaa', 'cursive'],
      },
animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}