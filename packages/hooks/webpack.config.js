/**
 * @type {import('webpack').Configuration}
 */

const path = require('path');
const merge = require('webpack-merge');
const common = require('../../webpack.common');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'react-hooks.js',
    library: 'react-hooks',
  },
});
