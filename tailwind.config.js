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
          DEFAULT: '#BA9E76',
          // 25: '#FFFBEF',
          50: '#F7F4F0',
          100: '#F1EBE3',
          200: '#E3D8C7',
          300: '#D5C4AC',
          400: '#C8B191',
          500: '#BA9E76',
          600: '#A58353',
          700: '#806540',
          800: '#5A482D',
          900: '#352A1B',
          950: '#221B11'
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}