module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        // This should be the last one
        "prettier",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    rules: {
        "no-useless-escape": 0,
    },
};
