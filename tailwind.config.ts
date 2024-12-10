import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
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
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: "#f0ffff",
        red: "#e32221",
        dark: "#20211a",
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
} satisfies Config;
