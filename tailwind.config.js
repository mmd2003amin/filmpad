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
        darker2: "#070e17",
        text: "#CCE1FF",
        primary: "#eec932",
        box: "#0D1726",
        box2: "#0f1c2e",
      },

      backgroundImage: {
        star: "linear-gradient(to right, #f9d423, #e69d00)",
        double: "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)",
        subtitle: "linear-gradient(to right, #00cdac, #02aab0)",
        play: "linear-gradient(90deg, hsla(279, 95%, 49%, 1) 0%, hsla(295, 96%, 50%, 1) 100%)",
        trailer : "linear-gradient(273deg, #ec2208, #ff6377)",
      },

      screens: {
        xs: "576px",
        1200: "1200px",
        1400: "1400px",
      },

      boxShadow: {
        button: "inset 0 0 0 40px #070e17",
      },
    },
  },
  plugins: [],
};
