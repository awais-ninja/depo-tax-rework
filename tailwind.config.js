/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1F4E79',
          blue: '#2E5C8A',
          red: '#C62828',
          redDark: '#A61E1E',
          accent: '#9a0000',
          accentDark: '#7a0000',
          white: '#FFFFFF',
          grayLight: '#F5F7FA',
          grayBorder: '#E5E7EB',
          text: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-8px) translateX(2px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' },
        },
        'line-expand': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'drift-slow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -10px)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'float-soft': 'float-soft 12s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 6s ease-in-out infinite',
        'line-expand': 'line-expand 0.6s ease-out forwards',
        'drift-slow': 'drift-slow 14s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-up': 'fade-up 0.55s ease-out forwards',
        'slide-down': 'slide-down 0.25s ease-out',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animation-delay-100': { animationDelay: '100ms' },
        '.animation-delay-150': { animationDelay: '150ms' },
        '.animation-delay-200': { animationDelay: '200ms' },
        '.animation-delay-250': { animationDelay: '250ms' },
        '.animation-delay-300': { animationDelay: '300ms' },
        '.animation-delay-400': { animationDelay: '400ms' },
        '.animation-delay-500': { animationDelay: '500ms' },
      });
    },
  ],
}
