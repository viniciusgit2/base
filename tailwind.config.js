/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:{
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist:{

  }
,
  theme: {
    extend: {},
  },
  plugins: [],
}
}