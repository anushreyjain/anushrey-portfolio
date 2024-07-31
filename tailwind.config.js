/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient': 'linear-gradient(var(--gradient-direction, to right), rgb(232 203 192 / var(--start-opacity, 0.2)), rgb(99 111 164 / var(--end-opacity, 0.2)))',
      },
      fontFamily: {
        sans: ['Montserrat', ...fontFamily.sans],
        oswald: ['Oswald', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
