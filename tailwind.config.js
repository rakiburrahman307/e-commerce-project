/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bg-color': '#F85606',
      'white': 'white',
      'gray': '#8492a6',
      'text-color':'#757575',
      'gray-dark': '#273444',
      '': '',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin'),require("daisyui")],
}

