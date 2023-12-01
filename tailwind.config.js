/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [__dirname+"/out/**/*.{html,js}"],
  theme: {
    container: {
      padding: "10px",
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '768px',
        
      },
    },
    extend: {},
  },
  plugins: [], 
}