module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react", "@typescript-eslint"],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking"
            ],
            parserOptions: {
                project: ["./tsconfig.json"],
                tsconfigRootDir: __dirname
            }
        }
    ],
    ignorePatterns: [".eslintrc.json"],
    rules: {
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-console": ["error", { allow: ["info", "error"] }],
        "react/react-in-jsx-scope": "off"
    }
};
