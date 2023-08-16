module.exports = {
  extends: "../../.eslintrc.js",
  ignorePatterns: ["!**/*", "src/environments/environment.*.ts"],
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: { project: ["tsconfig.app.json", "tsconfig.spec.json"], tsconfigRootDir: __dirname },
      rules: {
        "@angular-eslint/directive-selector": ["error", { type: "attribute", prefix: "example", style: "camelCase" }],
        "@angular-eslint/component-selector": ["error", { type: "element", prefix: "example", style: "kebab-case" }],
        "@angular-eslint/component-class-suffix": [
          "error",
          { suffixes: ["Component", "Layout", "Modal", "Page", "Card", "Form", "Tab"] },
        ],
        "@angular-eslint/component-max-inline-declarations": ["error", { template: 1 }],
      },
    },
  ],
};
