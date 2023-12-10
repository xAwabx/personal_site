/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgdark: "#2A2438",
        bglight: "#352F44",
        text: "#5C5470",
        textlight: "#DBD8E3",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
