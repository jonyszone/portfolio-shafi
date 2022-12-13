const {
  getModuleBuildInfo,
} = require("next/dist/build/webpack/loaders/get-module-build-info");

const options = {
  arrowParens: "avoid",
  singleQuote: true,
  bracketSpacing: true,
  endOfLine: "lf",
  semi: false,
  tabWidth: 2,
  trailingComma: "none",
};

module.exports = options;
