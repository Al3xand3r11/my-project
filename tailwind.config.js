/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Modak: ['Modak'],
      }
    },
    colors: {

      'pink': '#FF69B4',
      'black': '#101010',
      },
  },
  plugins: [],
}