/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif']
    },
    extend: {
      colors: {
        'blueish': '#0D0D2B',
        'lightblue': '#3671E9',
        'grayish': '#F2F2F2'
      },

      backgroundImage: {
        'bitcoin': "url('./public/images/newsletter.png')",
        
      }
    },
  },
  plugins: [],
}
