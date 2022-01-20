module.exports = {
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es2021: true
    },
    extends: [
        "airbnb-base"
    ],
    parserOptions: {
        ecmaVersion: 12
    },
    globals: {
        mobile: "readonly",
        websim: "readonly",
        OutDir: "readonly",
        pump: "readonly",
        carelink: "readonly",
        sensor: "readonly",
        Verify: "readonly",
        Step: "readonly",
        Note: "readonly",
        WaitInMinutes: "readonly",
        WaitInSeconds: "readonly",
        WaitInMilliseconds: "readonly",
        Core: "readonly",
        Observe: "readonly",
        loadLibrary: "readonly",
        Now: "readonly",
        Range: "readonly",
        Tolerance: "readonly",
        GreaterOrEqual: "readonly",
        Less: "readonly",
        Greater: "readonly",
        LessOrEqual: "readonly",
        Each: "readonly",
        Central: "readonly",
        actual: "readonly",
        expected: "readonly"
    },
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        "max-len": ["error", { code: 120, ignoreComments: true }],
        "no-underscore-dangle": ["error", { allowAfterThis: true, allow: ["_outDir"] }],
        "no-plusplus": "off",
        "no-return-assign": ["error", "always"],
        "class-methods-use-this": "off",
        "no-confusing-arrow": "off",
        "prefer-destructuring": ["error", { object: false, array: false }],
        "comma-dangle": ["error", "never"],
        "no-use-before-define": "off",
        "space-before-function-paren": ["error", "never"],
        "object-shorthand": [1, "consistent"],
        "no-else-return": "off",
        "operator-linebreak": ["error", "before", { overrides: { "+": "after" } }],
        "prefer-object-spread": "error",
        "guard-for-in": "off",
        "no-loop-func": "off",
        "func-names": ["error", "never"],
        "one-var": ["off", "always"],
        "one-var-declaration-per-line": ["off", "initializations"],
        "prefer-const": "off",
        "implicit-arrow-linebreak": "off",
        "linebreak-style": 0
    }
};
