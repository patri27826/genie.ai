import { resolve } from 'path';

module.exports = {
  webpack: {
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@/(.+)': '<rootDir>/src/$1',
      },
      transformIgnorePatterns: ['/node_modules/.pnpm/(?!lodash-es)'],
    },
  },
};
