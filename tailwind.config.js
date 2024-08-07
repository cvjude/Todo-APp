/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#32315a',
        'primary-fade': '#9899bc',
        'primary-dark': '#282850',
        'primary-done': '#37365f',
      },
    },
  },
  plugins: [],
};
