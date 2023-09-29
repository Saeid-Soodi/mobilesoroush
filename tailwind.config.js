/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode:'class',
  theme: {
    screens:{
      sm:"480px",
      md:"720px",
      lg :"1024px"
    },
    extend: {
      colors: {
        primaryColor :'#010a5e',
        primaryColorLight :'#010d78',
        SecondaryColor :'#ffcc00',
        paragraphColor :'#c0c0c0',
        whiteColor :'#fff',
        blackColor :'#000',
        redColor :'#cc3433',
        GreenColor :'#007936',
        darkColor :'#000',
        darkColorLight :'#171717',
      },
      keyframes:{
        move:{
          "50%":{transform: 'translateY(-1rem)'}
        }
      },
      animation:{
        'MovingY':'move 2.5s linear infinite'
      }
    },
    container:{
      center:true,
      padding :{
        default :'1rem',
        sm:'1.5rem'
      }
    },
    fontFamily:{
      oswald:['Oswald' ,'sans-serif'], 
      dmSans:['DM Sans' , 'sans-serif']
    }
  },
  plugins: [],
}