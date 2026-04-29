/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f072e",
        surface: "#1c153c",
        primary: "#fcfcfc",
        textMain: "#e6deff",
        textMuted: "#9ca3af"
      }
    },
  },
  plugins: [],
}