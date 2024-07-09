/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       dark:"#171823"
      },
      backgroundImage:{ 
        "hero-img":"url('./images/darck-image.jpg')"
      }
    },
  },
  plugins: [],
}

