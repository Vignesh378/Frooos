/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          light: "#D8F3DC",
          DEFAULT: "#95D5B2",
          dark: "#40916C",
        },
        citrus: {
          light: "#FFE5B4",
          DEFAULT: "#FFB347",
          dark: "#F77F00",
        },
        berry: {
          light: "#FFE0E9",
          DEFAULT: "#FF8FA3",
          dark: "#D81159",
        },
      },
      fontFamily: {
        display: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        pastel: "0 18px 30px rgba(149, 213, 178, 0.25)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(216, 243, 220, 0.8), rgba(255, 229, 180, 0.75)), radial-gradient(circle at bottom right, rgba(255, 143, 163, 0.6), rgba(255, 255, 255, 0.4))",
        "footer-gradient":
          "linear-gradient(135deg, rgba(149, 213, 178, 0.9), rgba(255, 179, 71, 0.9))",
      },
    },
  },
  plugins: [],
};






