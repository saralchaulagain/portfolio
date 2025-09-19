/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        msMadi: ["'Ms Madi'", "cursive"],
      },
    },
  },
  plugins: [],
};
