/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bg:        '#080808',
          surface:   '#0f0f0f',
          elevated:  '#161616',
          cyan:      '#00D9FF',
          purple:    '#BF5AF2',
          green:     '#30D158',
          amber:     '#FF9F0A',
          primary:   '#F2F2F2',
          secondary: '#888888',
          muted:     '#3d3d3d',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono:  ['"Geist Mono"', '"JetBrains Mono"', 'monospace'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.85)' },
        },
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to:   { backgroundPosition: '350% 50%, 350% 50%' },
        },
      },
      animation: {
        'blink':     'blink 1s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'aurora':    'aurora 120s linear infinite',
      },
    },
  },
  plugins: [],
}
