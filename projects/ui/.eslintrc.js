module.exports = {
  extends: "../../eslint.config.js",
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
        "@angular-eslint/directive-selector": [
          "error",
          { type: "attribute", prefix: ["sk", "ui"], style: "camelCase" },
        ],
        "@angular-eslint/component-selector": ["error", { type: "element", prefix: ["sk", "ui"], style: "kebab-case" }],
        "@angular-eslint/component-class-suffix": ["error", { suffixes: ["Component"] }],
        "@angular-eslint/component-max-inline-declarations": ["error", { template: 1 }],
      },
    },
  ],
};
