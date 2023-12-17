/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
      colors: {
        card_bg: "rgba(var(--card_bg))",
        card_text: "rgba(var(--card_text))",
        card_btn: "rgba(var(--card_btn))",
      },
    },
  },
  plugins: [],
};
