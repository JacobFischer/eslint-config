// @ts-check

/** @type {import('eslint').Linter.Config} */
const nodeEslintConfig = {
  env: {
    browser: true,
  },
  extends: ['./index.js'],
};

module.exports = nodeEslintConfig;
