var webpack = require('webpack')
module.exports = {
    entry: "./index.js",
    output: {
        library: 'SendSlackMessage',
        libraryTarget: 'var',
        path: __dirname,
        filename: "SendSlackMessage.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};