/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      'slate': {
        200: '#e2e8f0',
        500: '#64768b'
      },
      dark: {
        primary: "#222831",
        primarySecondary: "#393E46",
        secondary: "#00AD85",
        textPrimary: "#EEEEEE",
      },
    },
  },
  plugins: [],
};

