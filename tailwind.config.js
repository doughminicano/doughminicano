/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubrik: ["'ICA Rubrik'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      colors: {
        gray: {
          300: "#D2D2D2",
          700: "#25283B",
        },
      },
      animation: {
        spinSlow: "spin 20s linear infinite",
      },
      keyframes: {
        spin: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
