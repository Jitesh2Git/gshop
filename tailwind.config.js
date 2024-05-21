/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Georgia", " Cambria", "Times New Roman", "Times", "serif"],
    },
    colors: {
      bgcol: "#f0ffff",
      red: "#e32221",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
