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
      },
      backgroundImage: {
        'gradient-border': 'linear-gradient(to right, #ff7e5f, #feb47b)', // Customize your gradient here
      },
    },
  },
  plugins: [],
}

