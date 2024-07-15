/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Georgia", " Cambria", "Times New Roman", "Times", "serif"],
      },
      colors: {
        light: "#f0ffff",
        red: "#e32221",
        dark: "#20211a",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
