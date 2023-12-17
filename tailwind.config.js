/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
      colors: {
        card_bg: "var(--card_bg)",
        card_text: "var(--card_text)",
      },
    },
  },
  plugins: [],
};
