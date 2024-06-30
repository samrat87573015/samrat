/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1200px',

        },
      },
      fontFamily: {
        'Josefin':['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}