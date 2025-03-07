/** @type {import('tailwindcss').Config} */
export default {
  ontent: ["./*.html", "./js/*.js"], 
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", 
        secondary: "#F59E0B", 
      },
      spacing: {
        '128': '32rem', 
      }
    }
  },
  plugins: [],
}
