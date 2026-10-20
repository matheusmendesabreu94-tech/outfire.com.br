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
          red: '#e62429',
          'red-dark': '#b31519',
          'red-glow': '#ff4d4d',
          gold: '#d4af37',
          'gold-light': '#f3e5ab',
          dark: '#0c0d0e',
          card: '#16181b',
          border: '#282c34',
          metal: '#9da7b3',
          'metal-light': '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px rgba(230, 36, 41, 0.45)',
        'glow-gold': '0 0 25px rgba(212, 175, 55, 0.35)',
        'metal': 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 10px 30px rgba(0, 0, 0, 0.5)',
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
