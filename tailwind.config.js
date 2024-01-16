/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem", // Ukuran font ekstra kecil
        sm: "0.875rem", // Ukuran font kecil
        base: "1rem", // Ukuran font dasar
        lg: "1.125rem", // Ukuran font besar
        xl: "1.25rem", // Ukuran font ekstra besar
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
      },
      fontStyle: {
        italic: "italic",
      },
      colors: {
        custom: {
          primary: "#DE8655",
          secondary: "#F2DCD0",
          thrid: "#EADB51",
        },
      },
    },
  },
  plugins: [],
};
