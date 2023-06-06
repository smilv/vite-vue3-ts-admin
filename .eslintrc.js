/*
 * @Description: eslintrc
 * @Author: zhaobin
 * @Date: 2023-01-09 14:15:27
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-06-02 11:28:28
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "./.eslintrc-auto-import.json",
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
