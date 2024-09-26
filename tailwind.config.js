/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
  theme: {
    extend: {
      colors: {
        imint: "#9EFFBF",
        ipurple: "#7941A7",
        ipink: "#E2BEFF",
        iblue: "#1059C8",
      },
    },
  },
  plugins: [],
};
