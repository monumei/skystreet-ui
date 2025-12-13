/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skystreet: {
          ink: '#1e2a78',       // The main dark blue border color
          paper: '#f0f8ff',     // The "Manga White" background
          cyan: '#00b4d8',      // The accent cyan
          deep: '#0a0e29',      // Darker indigo for backgrounds
          alert: '#ef4444',     // Standard alert red
        }
      },
      fontFamily: {
        impact: ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
      },
      boxShadow: {
        'manga': '8px 8px 0px var(--shadow-color, rgba(30, 42, 120, 0.2))',
        'manga-hover': '12px 12px 0px var(--shadow-color, #00b4d8)',
      },
      backgroundImage: {
        'screentone': 'radial-gradient(circle, var(--dot-color, rgba(0,0,0,0.3)) 1px, transparent 1px)',
        'speedlines': 'repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(255,255,255,0.1) 10deg 20deg)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}