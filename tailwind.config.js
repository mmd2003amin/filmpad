/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bold: "kalameh-bold",
      black: "kalameh-black",
      regular: "kalameh-regular",
    },
    extend: {
      colors: {
        darker: "#09111c",
        text: "#CCE1FF",
        primary: "#eec932",
        box: "#0D1726",
      },

      screens: {
        xs: "576px",
        1200: "1200px",
        1400: "1400px",
      },
    },
  },
  plugins: [],
};
