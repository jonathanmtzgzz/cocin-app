/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FA9E31", //naranja claro
        secondary: "#FF6200", //naranja obscuro
        tertiary: "#E2E2E2",
        textColor: {
          heading: "#0A2533",
          body: "#748189",
        },
        buttons: {
          primary: {
            //azulado
            default: "#042628",
            hover: "#031f21",
          },
          secondary: {
            //gris
            default: "#999999",
            hover: "#5E5953",
          },
          tertiary: {
            //naranja
            default: "#FA9E31",
            hover: "#fa941b",
          },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
