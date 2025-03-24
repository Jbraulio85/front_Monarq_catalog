/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Asegúrate de incluir los archivos JSX/TSX
  theme: {
    extend: {
      fontFamily: {
        castelar: ["Castelar", "serif"], // Asegúrate de que el nombre sea en minúsculas
      },
    },
  },
  plugins: [],
};



