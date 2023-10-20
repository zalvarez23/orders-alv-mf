/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-medium": ["Montserrat-medium"],
        "montserrat-regular": ["Montserrat-regular"],
        "montserrat-bold": ["Montserrat-bold"],
        "montserrat-semibold": ["Montserrat-semibold"],
      },
      colors: {
        primary: "#7354D3",
        dark: "#29273e",
        secondary: "#FFD466",
      },
    },
  },
  plugins: [],
};
