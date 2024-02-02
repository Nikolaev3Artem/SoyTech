/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'xxl':{'max':'1440px'},
      'xl':{'max':'1024px'},
      'lg':{'max':'1024px'},
      'md':{'max':'768px'},
      'sm':{'max':'327px'}
    },
    container:{
      center:true
    },
    extend: {
      colors:{
        'black':'#1C1714',
        'green':'#263228',
        'yellow':'#947B35',
        'grey':'#D0CBBC',
        'white':'#FFFFFF',
        'red':'#D83D28'
      }
    },
  },
  plugins: [],
}