module.exports = {
  plugins: [
    require("postcss-nesting"), // 👈 MUST FIRST
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
