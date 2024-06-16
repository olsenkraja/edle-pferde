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
          DEFAULT: '#b58e5a',
          '50': '#faf7f2',
          '100': '#f2eee2',
          '200': '#e8dfca',
          '300': '#d4c29d',
          '400': '#c2a575',
          '500': '#b58e5a',
          '600': '#a87c4e',
          '700': '#8c6442',
          '800': '#71513b',
          '900': '#5c4332',
          '950': '#312219',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}