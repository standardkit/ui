module.exports = {
  extends: "../../.eslintrc.js",
  root: true,
  ignorePatterns: ["!**/*"],
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["tsconfig.lib.json", "tsconfig.spec.json"],
        tsconfigRootDir: __dirname,
      },
      rules: {
        "@angular-eslint/directive-selector": ["error", { type: "attribute", prefix: "sk", style: "camelCase" }],
        "@angular-eslint/component-selector": ["error", { type: "element", prefix: "sk", style: "kebab-case" }],
        "@angular-eslint/component-class-suffix": ["error", { suffixes: ["Component"] }],
        "@angular-eslint/component-max-inline-declarations": ["error", { template: 1 }],
      },
    },
  ],
};
