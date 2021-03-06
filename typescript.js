const eslintrc = require("./.eslintrc");

module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    ...eslintrc.env,
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
  rules: {
    "react/jsx-filename-extension": [2, { extensions: [".ts", ".tsx"] }],
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
};
