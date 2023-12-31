module.exports = {
  "**/*.{js,html,scss,md,yml,yaml,json}": "prettier --write",
  "*.ts": "eslint --fix",
  "**/*.{css,scss}": "stylelint --fix",
};
