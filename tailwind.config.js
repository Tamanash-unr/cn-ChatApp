/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          200: '#252424'
        },
        green: {
          200: '#68de4d'
        }
      }
    },
  },
  plugins: [],
}

