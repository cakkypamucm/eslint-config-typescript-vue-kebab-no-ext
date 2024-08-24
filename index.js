/* eslint sort-keys/sort-keys-fix: "error" */
/* eslint-disable sort-keys/sort-keys-fix */
module.exports = {
    plugins: ["@typescript-eslint"],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        project: true,
        extraFileExtensions: [".vue"]
    },
    extends: [
        "eslint-config-vue-kebab-no-ext-cakkypamucm",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "prettier"
    ],
    /* eslint-enable sort-keys/sort-keys-fix */
    rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/lines-between-class-members": ["error", "never", { exceptAfterOverload: true }],
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                ignoreTypeReferences: true
            }
        ],
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/semi": ["error"],
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "import/extensions": ["error", { vue: "always" }],
        "lines-between-class-members": "off",
        "no-use-before-define": "off",
        semi: "off",
        "vue/block-lang": [
            "error",
            {
                script: {
                    lang: "ts"
                }
            }
        ]
    },
    /* eslint-disable sort-keys/sort-keys-fix */
};
