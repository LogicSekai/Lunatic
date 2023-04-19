/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'vulcan': {
        '50': '#f5f6fa',
        '100': '#e9ebf5',
        '200': '#cfd5e8',
        '300': '#a4b2d5',
        '400': '#748abc',
        '500': '#526ba5',
        '600': '#3f538a',
        '700': '#344470',
        '800': '#2e3a5e',
        '900': '#2a3350',
        '950': '#10131e',
      },
    },
  },
  plugins: [],
}

