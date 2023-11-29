/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [__dirname+"/out/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [], 
}