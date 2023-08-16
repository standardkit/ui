/** jest.config.js */

module.exports = {
  collectCoverageFrom: [
    "<rootDir>/projects/ng-standardkit/src/**/*.ts",
    "!<rootDir>/projects/ng-standardkit/src/**/index.ts",
    "!<rootDir>/projects/ng-standardkit/src/**/*.module.ts",
  ],

  coverageDirectory: "coverage",

  coverageReporters: ["lcov", "text-summary"],

  testPathIgnorePatterns: [
    "<rootDir>/coverage/",
    "<rootDir>/dist/",
    "<rootDir>/e2e/",
    "<rootDir>/node_modules/",
    "<rootDir>/projects/ng-standardkit/src/*.(js|scss)",
  ],

  testMatch: ["<rootDir>/projects/ng-standardkit/src/*.spec.ts", "<rootDir>/projects/ng-standardkit/src/**/*.spec.ts"],
};
