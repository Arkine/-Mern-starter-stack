const paths = require('./paths');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = merge(common,  {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
		new DashboardPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
});