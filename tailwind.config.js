/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'noble': {
          DEFAULT: '#8F9281',
          50: '#FCFCFC',
          100: '#F2F3F1',
          200: '#DFE0DB',
          300: '#C4C6BD',
          400: '#A9AC9F',
          500: '#8F9281',
          600: '#727565',
          700: '#55574B',
          800: '#383931',
          900: '#1A1B17',
          950: '#0C0C0A'
        },
        siam: {
          DEFAULT: '#5B6753',
          50: '#C2CBBE',
          100: '#B6C0B1',
          200: '#9FAC98',
          300: '#88977E',
          400: '#718067',
          500: '#5B6753',
          600: '#4A5343',
          700: '#383F33',
          800: '#272C23',
          900: '#151813',
          950: '#0D0E0B'
        },
        'zuccini': {
          '50': '#ecfdf2',
          '100': '#d0fbdf',
          '200': '#a5f5c4',
          '300': '#6beaa5',
          '400': '#31d682',
          '500': '#0cbd68',
          '600': '#029954',
          '700': '#017b46',
          '800': '#046139',
          '900': '#04482c',
          '950': '#012d1b',
        },
        muesli: {
          DEFAULT: '#A98062',
          50: '#EAE0D9',
          100: '#E3D5CB',
          200: '#D4C0B1',
          300: '#C6AB97',
          400: '#B7957C',
          500: '#A98062',
          600: '#88654B',
          700: '#644A37',
          800: '#402F23',
          900: '#1C140F',
          950: '#090705'
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}