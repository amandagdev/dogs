module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
  moduleNameMapper: {
    '\\.(svg|css|less|scss|png|jpg)$': 'identity-obj-proxy',
  },
}
