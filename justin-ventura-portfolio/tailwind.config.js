/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // this theme should be black:
        theme: "#000000",
      },
      fontFamily: {
        // this is my imported font 'inter':
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
