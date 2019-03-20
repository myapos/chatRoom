// https://github.com/xfumihiro/jest-puppeteer-example
module.exports = {
  globalSetup: './jest_puppeteer/setup.js',
  globalTeardown: './jest_puppeteer/teardown.js',
  testEnvironment: './jest_puppeteer/puppeteer_environment.js',
  transformIgnorePatterns: ['./node_modules'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
    '\\.(styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  notify: true,
};
