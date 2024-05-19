/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hind: ["Hind", "sans-serif"],
      },
      colors: {
        primary: '#7C120C'
      }
    },
  },
  plugins: [],
}

