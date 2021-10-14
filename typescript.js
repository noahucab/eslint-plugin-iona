module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    React: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "./.eslintrc.js",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {},
  parserOptions: {
    project: "./tsconfig.json",
  },
};
