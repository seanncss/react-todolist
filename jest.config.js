module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`],
    // moduleNameMapper: {
    //   '.*\\.(css)$': '<rootDir>/mockCssModule.js',
    // },
  };