/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f2f2f2",
        gray: {
          400: "#34343A",
          500: "#2C2D31",
          600: "#25242A",
        },
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.2rem",
        "2xl": "1.5rem",
        "3xl": "1.9rem",
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};
