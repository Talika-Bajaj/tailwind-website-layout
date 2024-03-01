/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '600px'},
        'xxs': {'max': '400px'},
      }
    },
  },
  plugins: [],
}

