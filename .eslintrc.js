module.exports = {
    "parser": "babel-eslint",
    "root": true,
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "amd": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": ["eslint:recommended"],
    "rules": {
        "no-useless-escape": 1,
        "no-console": 1,
        "no-debugger": 1,
        "no-unused-vars": 1,
        "no-var": 1,
        "block-scoped-var": 1,
        "no-use-before-define": 1,
        "comma-dangle": 0,
        "no-caller": 1,
        "no-loop-func": 1,
        "no-extend-native": 1,
        "no-global-assign": 1,
        "no-proto": 1,
        "no-eq-null": 1,
        "no-floating-decimal": 1,
        "curly": 1,
        "semi": 1,
        "arrow-parens": 1,
        "arrow-body-style": [1, "as-needed"]
    }
}