export default {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/lib/**',
    '!**/src/models/**',
    '!**/src/constants/**',
    '!**/src/config/**',
    '!**/src/structures/**',
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
};
