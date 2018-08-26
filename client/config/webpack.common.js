const paths = require('./paths');

module.exports = {
    target: 'web',
    entry: [
        paths.appIndexJs
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            app: paths.appSrc
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [
                    paths.appSrc,
                ],
                use: [{
                    loader: 'babel-loader',
                }]
            }
        ]
    }
}