/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  safelist: [

    {
      pattern: /text-(orange|green|blue|indigo|purple|pink|yellow)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['lg', 'hover', 'group-hover', 'focus', 'lg:hover', 'md', 'md:hover', 'after', 'before', 'after:hover', 'before:hover'],
    },
    {
      pattern: /bg-(orange|green|blue|indigo|purple|pink|yellow)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['lg','dark:before','dark:after', 'hover', 'group-hover', 'focus', 'lg:hover', 'md', 'md:hover', 'after', 'before', 'after:hover', 'before:hover'],
    },

  ],
  theme: {
    colors: {
      'bg-primary': '#F85606',
      'primary-dark': '#0F0F0F',
      'semi-dark': '#182229',
      'secondary-text': '#757575',
      'secondary-text-dark': '#A6ADBB',


    },
    extend: {},
    purge: {
      enabled: true,
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    },
  },
  plugins: [require('flowbite/plugin'), require("daisyui")],
}