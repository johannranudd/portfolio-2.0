/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "4xs": "300px",
      "3xs": "350px",
      xxs: "400px",
      xs: "480px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      mono: "PT Mono, monospace",
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        mlg: "1000px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
      },
      gridTemplateColumns: {
        "auto-grid-220": "repeat(auto-fit, minmax(210px, 1fr))",
      },
      width: {
        navbarWidth: "50px",
        sidebarWidth: "70px",
      },
      height: {
        navbarWidth: "50px",
        sidebarWidth: "70px",
      },
      margin: {
        navbarWidth: "50px",
        sidebarWidth: "70px",
      },
      padding: {
        navbarWidth: "50px",
        sidebarWidth: "70px",
      },
      colors: {
        primary: "var(--primary)",
        "primary-transparent": "var(--primary-transparent)",
        secondary: "var(--secondary)",
        thirdClr: "var(--thirdClr)",
        "thirdClr-transparent": "var(--thirdClr-transparent)",
        thirdClrDark: "var(--thirdClrDark)",
        fourthClr: "var(--fourthClr)",
        fourthClrDark: "var(--fourthClrDark)",
      },
      boxShadow: {
        bsOne: "rgba(0, 0, 0, 0.2) 0px -7px 10px 0px",
        bsTwo: "rgba(0, 0, 0, 0.2) 0px 4px 10px 0px",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
