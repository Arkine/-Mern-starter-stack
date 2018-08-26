const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    entry: [
        paths.appIndex,js
    ],
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
});