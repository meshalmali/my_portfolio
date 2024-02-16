/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.html",
    "./node_modules/css-loader/**/*.{html,js}",
    "./node_modules/postcss-loader/**/*.{html,js}",
    "./node_modules/source-map-loader/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
