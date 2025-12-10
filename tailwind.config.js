const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'skills': "url('../assets/bg-skills.png')",
        'mobile': "url('../assets/bg-mobile.png')",
      },
     
      spacing: {
        '100px': '100px',
        '125px': '125px',
        '155px': '155px',
      },
       fontFamily: {
        sans: ['"Exo 2"', ...defaultTheme.fontFamily.sans], 
      },
      
    },
  },
  plugins: [],
}