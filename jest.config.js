// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  moduleNameMapper: {
    '@/utils/(.*)': ['<rootDir>/src/helpers/utils/$1'],
    '@/(.*)': ['<rootDir>/src/$1'],
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
