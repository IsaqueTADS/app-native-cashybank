const { colors, spacing, fontFamily, fontSize, borderRadius } = require('./src/constants/design-tokens');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      spacing,
      fontFamily,
      fontSize,
      borderRadius,
    },
  },
  plugins: [],
}