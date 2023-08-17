/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#519BD0",
        "secondary": "#858585",
        "amoba": "#F5F5F5",
        "ligth_green": "#9BDD7C",
        "reserved_day": "#27AE60",
        "disabled_day": "#FFF2D9",
        "full_route": "#DFDFDF",
        "off_frecuency": "#C0392B"
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
      },
      screens: {
        "sm": "640px",
        "md": "768px",
      },
    },
  },
  plugins: [],
}

