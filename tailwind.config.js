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
          DEFAULT: '#8B8FA8',
          light: '#A5A9C1',
          dark: '#6B7094',
        },
        secondary: {
          DEFAULT: '#9AACB8',
          light: '#B4C6D2',
          dark: '#7E929E',
        },
        accent: {
          DEFAULT: '#A8C5A3',
          light: '#C2E0BD',
          dark: '#8EAA89',
        },
        creative: {
          purple: '#A89FCE',
          pink: '#D4A5C7',
          orange: '#E4C5A0',
          teal: '#8FB5B1',
          indigo: '#8791C7',
        },
        dark: '#4A5568',
        light: '#F7FAFC',
        neumorphic: {
          base: '#E2E8F0',
          light: '#F7FAFC',
          dark: '#CBD5E0',
          shadow: {
            light: '#FFFFFF',
            dark: '#A0AEC0',
          }
        },
        gray: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
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
        'float': 'float 3s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'neumorph': '8px 8px 16px #A0AEC0, -8px -8px 16px #FFFFFF',
        'neumorph-inset': 'inset 8px 8px 16px #A0AEC0, inset -8px -8px 16px #FFFFFF',
        'neumorph-sm': '4px 4px 8px #A0AEC0, -4px -4px 8px #FFFFFF',
        'neumorph-lg': '12px 12px 24px #A0AEC0, -12px -12px 24px #FFFFFF',
        'neumorph-xl': '20px 20px 40px #A0AEC0, -20px -20px 40px #FFFFFF',
      },
    },
  },
  plugins: [],
}