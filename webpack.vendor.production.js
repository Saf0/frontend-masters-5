var config = require('./webpack.vendor.js');
var webpack = require('webpack');
config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': '"production"'
    }
}));
module.exports = config;