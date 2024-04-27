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
        trailer: "linear-gradient(273deg, #ec2208, #ff6377)",
        ticket1: "linear-gradient(195deg, #ffc107, #bf9000)",
        ticket2: "linear-gradient(195deg, #66bb6a, #43a047)",
        list: "linear-gradient(195deg, #465bd0, #25306c)",
      },

      screens: {
        400 : "400px",
        xs: "576px",
        620: "620px",
        1200: "1200px",
        1400: "1400px",
      },

      boxShadow: {
        button: "inset 0 0 0 40px #070e17",
        form: "0 0 200px 0 rgb(0 0 0 / 20%)",
        buttonForm: "0 8px 60px 0 #eec93247",
        boxDashboard:
          "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)",
      },

      width: {
        calc: "calc(100% - 20rem)",
      },
    },
  },
  plugins: [],
};
