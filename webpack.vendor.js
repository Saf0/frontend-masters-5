var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
module.exports = {
    context: path.resolve(__dirname),
    entry: {
        vendor: [
            'react',
            'react-dom',
            'whatwg-fetch',
            //'./src/js/icons.js'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.svg$/,
                loader: 'svg-sprite?' + JSON.stringify({
                    name: '[name]',
                    prefixize: true,
                    spriteModule: 'utils/my-custom-sprite'
                })
            }
        ]
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, "www"),
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname, "www", '[name].json')
        })
    ]
};