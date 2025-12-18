/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable manual dark mode
  theme: {
    extend: {
      colors: {
        skystreet: {
          // Classic Manga (Light Mode)
          ink: '#1e2a78',       // Main dark blue border/text
          paper: '#f0f8ff',     // Manga White background
          cyan: '#00b4d8',      // Accent cyan (Sky Blue)
          deep: '#0a0e29',      // Darker indigo (Night Mode BG)
          alert: '#ef4444',     // Red
          
          // Night Mode Additions
          night: '#050a14',     // Even darker background
          neon: '#4cc9f0',      // Brighter cyan for dark mode
          star: '#ffffff',      // Pure white for text in dark mode
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        impact: ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
      },
      boxShadow: {
        'manga': '8px 8px 0px var(--shadow-color, rgba(30, 42, 120, 0.2))',
        'manga-hover': '12px 12px 0px var(--shadow-color, #00b4d8)',
        'glow': '0 0 15px rgba(0, 180, 216, 0.5)',
      },
      backgroundImage: {
        'screentone': 'radial-gradient(circle, var(--dot-color, rgba(30, 42, 120, 0.1)) 1px, transparent 1px)',
        'speedlines': 'repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(255,255,255,0.05) 10deg 20deg)',
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