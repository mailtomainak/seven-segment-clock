const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
module.exports = merge(common,{
    mode:'development',
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    optimization: {
        minimize: true
      },
    plugins:[
        new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});

