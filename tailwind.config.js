/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:{
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist:{
    safelist: [
      '*bg-',
      '*from-*',
      '*to-',
    ]
  }
  
,
  theme: {
    extend: {},
  },
  plugins: [],
}
}
  