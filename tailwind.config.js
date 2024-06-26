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
      variants: ['lg','dark:before','dark:after','checked', 'hover', 'checked:before', 'group-hover', 'focus', 'lg:hover', 'md', 'md:hover', 'after', 'before', 'after:hover', 'before:hover','hover:before','hover:after'],
    },
    {
      pattern: /border-(orange|green|blue|indigo|purple|pink|yellow)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['lg','dark:before','dark:after', 'hover', 'checked', 'group-hover', 'focus', 'lg:hover', 'md', 'md:hover', 'after', 'before', 'after:hover', 'before:hover','hover:before','hover:after'],
    },
   
  ],
  theme: {
    colors: {
      'bg-primary': '#F85606',
      'primary-dark': '#1B1B1D',
      'semi-dark': '#242526',
      'secondary-text': '#757575',
      'secondary-text-dark': '#A6ADBB',
      'root-bg': '#F5F5F5',
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