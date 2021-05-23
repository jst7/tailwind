const { red } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    colors: {
      cyan: {
        600: '#32a852',
      }, light: {
        400: 'palevioletred',
        500: '#cdadf1'
      },
      black: {
        500: 'black'
      }, green: {
        500: 'rgb(129, 247, 129)'
      }, white: {
        500: 'white'
      }, gray: {
        500: 'rgba(0,0,0,.55)'
      }, red: {
        200: 'red'
      }, blue: {
        200: 'blue',
        300: 'aqua'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}