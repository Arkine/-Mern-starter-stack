const merge = require('webpack-merge');
const dev = require('./webpack.dev');
const paths = require('./paths');

module.exports = merge(dev, {
    devServer: {
        contentBase: paths.appOutput,
        publicPath: '/',
        /**
         * Server proxy requests all goto :5000
         */
        proxy: {
            '*': paths.serverProxy
        },
        port: 3000,
        historyApiFallback: true,
        hot: true,
        overlay: true,
        inline: true,
        compress: true
    }
});