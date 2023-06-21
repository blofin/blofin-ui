const UITheme = require("./theme");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: UITheme,
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: [
      "./src/**/*.{tsx,ts,js,jsx}"
      // etc.
    ]
  }
};
