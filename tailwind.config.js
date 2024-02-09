/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      //Tamaños para responsive desing
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        photoclick: ['Montserrat', "sans-serif"]
      },
      colors: {
        // Configure your color palette here
        transparent: 'transparent',
        current: 'currentColor',
        //Colores de fondo
        pc_black: '#212121',
        pc_gray_dark: '#363636',
        pc_gray_white: '#D2D2D2',
        pc_gray_details: '#929292'  
      }
    },
   
  },
  plugins: [],
}