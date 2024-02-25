/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bg-primary': '#F85606',
      'secondary-text':'#757575',
      'bg-primary-dark': '#1D232A',
      'secondary-text-dark': '#A6ADBB',
     
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin'),require("daisyui")],
}

