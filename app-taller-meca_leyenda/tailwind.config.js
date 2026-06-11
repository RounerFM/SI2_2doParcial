/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './App.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        /** Paleta esmeralda — alineada con frontend web */
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        /** Escala invertida para dark mode: 50=superficie oscura, 900=texto claro */
        dark: {
          50: '#0b1220',
          100: '#111a2b',
          200: '#1a2336',
          300: '#5b6b85',
          400: '#7c8aa3',
          500: '#94a3b8',
          600: '#b4c0d4',
          700: '#cdd6e3',
          800: '#e0e7f0',
          900: '#eef2f8',
        },
      },
      boxShadow: {
        glass: '0 8px 24px rgba(16, 185, 129, 0.10), 0 2px 6px rgba(15, 23, 42, 0.04)',
        'glass-sm': '0 1px 2px rgba(16, 185, 129, 0.06), 0 1px 3px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
};
