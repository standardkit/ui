module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "tsconfig.json", tsconfigRootDir: __dirname, sourceType: "module" },
  plugins: ["@typescript-eslint", "import", "unused-imports", "simple-import-sort", "rxjs"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:rxjs/recommended",
  ],
  root: true,
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "@typescript-eslint/explicit-member-accessibility": ["error", { overrides: { constructors: "off" } }],
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "interface", format: ["PascalCase"] },
      { selector: "enumMember", format: ["PascalCase"] },
      { selector: "typeAlias", format: ["PascalCase"] },
      { selector: "variable", types: ["boolean"], format: ["camelCase"] },
      { selector: "variableLike", format: ["camelCase"] },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
    ],

    "simple-import-sort/exports": "error",
    "import/order": ["error", { "newlines-between": "never", alphabetize: { order: "asc", caseInsensitive: false } }],
    "unused-imports/no-unused-imports": "error",

    "max-len": ["error", { code: 120 }],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "no-empty-function": ["error", { allow: ["arrowFunctions", "constructors"] }],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-trailing-spaces": "error",
    "comma-dangle": ["error", "always-multiline"],

    "rxjs/no-async-subscribe": "error",
    "rxjs/no-ignored-observable": "error",
    "rxjs/no-nested-subscribe": "error",
    "rxjs/no-unbound-methods": "error",
    "rxjs/throw-error": "error",
    "rxjs/no-implicit-any-catch": "error",
    "rxjs/finnish": [
      "error",
      {
        functions: true,
        methods: true,
        names: { "^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$": false },
        parameters: true,
        properties: true,
        types: { "^EventEmitter$": false },
        variables: true,
      },
    ],
  },
  settings: {
    "import/resolver": { typescript: { alwaysTryTypes: true, project: "./tsconfig.json" } },
  },
};
