/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        blue: {
          1: "hsl(213, 96%, 18%)",
          2: "hsl(243, 100%, 62%)",
          3: "hsl(228, 100%, 84%)",
          4: "hsl(206, 94%, 87%)",
        },
        red: "hsl(354, 84%, 57%)",
      },
      neutral: {
        gray: {
          1: "hsl(231, 11%, 63%)",
          2: "hsl(229, 24%, 87%)",
        },
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    extend: {},
  },
  plugins: [],
};
