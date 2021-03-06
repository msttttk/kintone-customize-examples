module.exports = {
  'extends': 'eslint-config-kintone',
  'plugins': [
    'react',
    'jsx-a11y',
    'import'
  ],
  'globals': {
    'example': true,
    'Promise': true,
    'wijmo': true,
    'vue': true
  },
  'rules': {
    'indent': [2, 2, { 'SwitchCase': 1 }]
  }
};
