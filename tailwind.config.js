/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-orange-500",
    "text-green-500",
    "text-blue-700",
    "text-indigo-700",
    "text-blue-900",
    "text-purple-900",
    "text-pink-600",
    "text-yellow-400",
    {
      pattern: /text-(orange|green|blue|indigo|purple|pink|yellow)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['lg', 'hover','group-hover', 'focus', 'lg:hover', 'md', 'md:hover'],
    },
    
  ],
  theme: {
    colors: {
      'bg-primary': '#F85606',
      'secondary-text': '#757575',
      'bg-primary-dark': '#1D232A',
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