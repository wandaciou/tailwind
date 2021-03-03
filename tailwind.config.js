module.exports = {
  purge: ["/.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
       },
       flex:{
        '2' :'2 2 0%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
