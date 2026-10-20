/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        outfire: {
          gold: '#d4af37',
          'gold-light': '#f3e5ab',
          'gold-bright': '#e5c05d',
          'gold-dark': '#997b1a',
          'gold-deep': '#785d0d',
          dark: '#08090b',
          'dark-card': '#0e1014',
          'dark-elevated': '#14171e',
          border: '#242831',
          'gold-border': 'rgba(212, 175, 55, 0.3)',
          red: '#dc2626',
          'red-dark': '#991b1b',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(212, 175, 55, 0.35)',
        'glow-gold-lg': '0 0 45px rgba(212, 175, 55, 0.5)',
        'glow-red': '0 0 25px rgba(220, 38, 38, 0.45)',
        'metal': 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 10px 30px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flame-flicker': 'flicker 0.4s infinite alternate',
      },
      keyframes: {
        flicker: {
          '0%': { transform: 'scale(1) translateY(0)', opacity: '0.9' },
          '100%': { transform: 'scale(1.08) translateY(-4px)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

