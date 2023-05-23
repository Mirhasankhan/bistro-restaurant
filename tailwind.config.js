/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'about-bg': "url('/src/assets/reservation/category-pizza.jpg')",
        'featured-bg': "url('/src/assets/home/featured.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

