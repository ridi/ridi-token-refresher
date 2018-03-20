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
    'import/prefer-default-export': 'off',
    'no-param-reassign': [
      'error',
      {
        'props': true,
        'ignorePropertyModificationsFor': ['window']
      },
    ]
  }
};