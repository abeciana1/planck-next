const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...defaultTheme.colors,
      white: "#FBFEF9",
      black: "#040303",
      blue: "#283098",
      yellow: "#FAB92F",
      red: "#E73508"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
