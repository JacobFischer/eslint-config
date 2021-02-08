// @ts-check

/** @type {import('eslint').Linter.Config} */
const nodeEslintConfig = {
  env: {
    node: true,
  },
  extends: ['./index.js'],
};

module.exports = nodeEslintConfig;
