const OFF = 0;
const ON = 1;
const ERROR = 2;

module.exports = {
  'extends': '@ridi',
  'env': {
    'es6': true
  },
  'parserOptions': {
    'sourceType': 'module'
  },
  'plugins': ['jest', 'import'],
  'rules': {

    // Override Rules
    'class-methods-use-this': OFF,
    'import/prefer-default-export': OFF,
    'no-param-reassign': [
      ERROR,
      {
        'props': true,
        'ignorePropertyModificationsFor': ['window']
      },
    ]
  }
};