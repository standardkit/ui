/** jest.config.js */

module.exports = {
  collectCoverageFrom: [
    "<rootDir>/projects/ui/src/**/*.ts",
    "!<rootDir>/projects/ui/src/**/index.ts",
    "!<rootDir>/projects/ui/src/**/*.module.ts",
  ],

  coverageDirectory: "coverage",

  coverageReporters: ["lcov", "text-summary"],

  testPathIgnorePatterns: [
    "<rootDir>/coverage/",
    "<rootDir>/dist/",
    "<rootDir>/e2e/",
    "<rootDir>/node_modules/",
    "<rootDir>/projects/ui/src/*.(js|scss)",
  ],

  testMatch: ["<rootDir>/projects/ui/src/*.spec.ts", "<rootDir>/projects/ui/src/**/*.spec.ts"],
};
