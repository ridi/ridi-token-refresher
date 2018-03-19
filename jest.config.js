module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
  ],
};
