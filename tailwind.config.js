/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,tx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'vsm': '300px',
      },
    },
  },
  plugins: [],
}
