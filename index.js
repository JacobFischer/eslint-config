// @ts-check
/* eslint-env node */

const { dirname } = require("path");
const { ESLINT_PATH_TSCONFIG } = process.env;

if (!ESLINT_PATH_TSCONFIG || typeof ESLINT_PATH_TSCONFIG !== "string") {
    throw new Error("Cannot use this eslint config file with process.env.ESLINT_PATH_TSCONFIG set");
}

// const ENABLED_ERROR = "error";
const ENABLED_WARNING = "warn";

/** @type {import("eslint").Linter.Config} */
const baseEslintConfig = {
    env: {
        es6: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        project: ESLINT_PATH_TSCONFIG,
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
        "eslint-plugin-import-order-alphabetical",
        "jsdoc",
        "import",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jsdoc/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
    ],
    rules: {
        // TypeScript
        "@typescript-eslint/explicit-function-return-type": "off", // For now does not allow enough control over arrow functions, always requiring return types even on simple reducers and such.

        // JSDoc
        "jsdoc/no-types": 1, // all jsdoc type rules disabled because TypeScript
        "jsdoc/require-param-type": "off",
        "jsdoc/require-returns": [ENABLED_WARNING, { checkGetters: false }],
        "jsdoc/require-returns-type": "off",
        "jsdoc/no-undefined-types": "off",
        "jsdoc/check-indentation": [ENABLED_WARNING],
        "jsdoc/require-description": [ENABLED_WARNING],
        "jsdoc/require-description-complete-sentence": [ENABLED_WARNING],
        "jsdoc/require-hyphen-before-param-description": [
            ENABLED_WARNING,
            "always",
        ],
    },
    settings: {
        "import/extensions": [".js", ".ts"],
        "import/resolver": {
            node: {
                extensions: [".js", ".ts"],
            },
            typescript: {
                alwaysTryTypes: true,
                directory: dirname(ESLINT_PATH_TSCONFIG),
            },
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"],
        },
        jsdoc: {
            mode: "typescript",
        },
    },
};

module.exports = baseEslintConfig;
