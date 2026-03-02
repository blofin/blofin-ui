const UITheme = require("./theme");
const tailwindcssRTL = require("tailwindcss-rtl");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  prefix: "bu-",
  theme: UITheme,
  plugins: [tailwindcssRTL]
};
