var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/js/app.jsx',
    output: {
        path: __dirname + '/www',
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader?sourceMap!sass-loader?sourceMap"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?sourceMap"
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.svg$/,
                loader: 'url-loader?mimetype=image/svg+xml'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?mimetype=application/font-woff"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?mimetype=application/octet-stream"
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "url" }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'www'),
        host: '0.0.0.0',
        port: 3000,
        inline: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname),
            manifest: require(path.resolve(__dirname, 'www', 'vendor.json'))
        })
    ]
};