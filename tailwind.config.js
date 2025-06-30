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
          DEFAULT: '#ff6b6b',
          light: '#ff8e8e',
          dark: '#ff4757',
        },
        secondary: {
          DEFAULT: '#4ecdc4',
          light: '#7ed6d1',
          dark: '#26a69a',
        },
        accent: {
          DEFAULT: '#45b7d1',
          light: '#74c7e3',
          dark: '#2c98b8',
        },
        creative: {
          purple: '#a8e6cf',
          pink: '#ff8fab',
          orange: '#ffa726',
          teal: '#4db6ac',
          indigo: '#7986cb',
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
        'scale-in': 'scaleIn 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-strong': 'pulseStrong 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'morphing': 'morphing 15s ease infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px) rotate(-2deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8) rotate(-5deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseStrong: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        morphing: {
          '0%': { borderRadius: '20px', transform: 'rotate(0deg)' },
          '25%': { borderRadius: '50px', transform: 'rotate(90deg)' },
          '50%': { borderRadius: '20px', transform: 'rotate(180deg)' },
          '75%': { borderRadius: '50px', transform: 'rotate(270deg)' },
          '100%': { borderRadius: '20px', transform: 'rotate(360deg)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}