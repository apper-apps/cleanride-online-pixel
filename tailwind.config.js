/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003C7D",
        secondary: "#0066CC",
        accent: "#00A651",
        warning: "#FFB81C",
        error: "#DC2626",
        surface: "#FFFFFF",
        background: "#F5F7FA"
      },
      fontFamily: {
        'display': ['DM Sans', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
      animation: {
        'bounce-subtle': 'bounce 1s infinite',
        'checkmark': 'checkmark 0.6s ease-in-out',
        'shake': 'shake 0.5s ease-in-out'
      },
      keyframes: {
        checkmark: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' }
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' }
        }
      }
    },
  },
  plugins: [],
}