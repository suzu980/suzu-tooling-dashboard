/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {},
  plugins: [require("tailwindcss-animate")],
};
