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
  purge: {
    enabled: true,
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [
        'bg-primary',
        'secondary-text',
        'bg-primary-dark',
        'secondary-text-dark',
        /^bg-[a-zA-Z0-9]+$/,
        /^text-[a-zA-Z0-9]+$/,
      ],
    },
  },
  plugins: [require('flowbite/plugin'), require("daisyui")],
}

