module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "prettier",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
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
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["@typescript-eslint", "import"],
    rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "import/no-unresolved": "off",
        "import/order": [
            "error",
            {
                groups: [
                    "type",
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "object"
                ],
                pathGroups: [
                    {
                        pattern: "~/types/**",
                        group: "parent",
                        position: "before"
                    },
                    {
                        pattern: "~/**",
                        group: "parent",
                        position: "before"
                    }
                ],
                "newlines-between": "always",
                distinctGroup: false
            }
        ]
    }
};
