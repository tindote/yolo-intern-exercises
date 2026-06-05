module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/test-lib/**/*.test.js'],
  collectCoverageFrom: [
    'lib/src-lib/**/*.js',
    '!lib/src-lib/testRunner.js'
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  verbose: true
};
