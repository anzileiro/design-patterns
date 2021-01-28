module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    '^@application/(.*)$': '<rootDir>/src/application/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};