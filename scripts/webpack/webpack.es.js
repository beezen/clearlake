let path = require('path');
let webpack = require('webpack');
let rootPath = path.resolve(process.cwd());
let {
    componentsList,
    packages
} = require('./default');

module.exports = {
    mode: 'development',
    entry: componentsList,
    output: {
        pathinfo: true,
        path: path.resolve(rootPath, 'es'),
        filename: (chunksData) => {
            return chunksData.chunk.name == 'index' ? 'index.js' : '[name]/index.js'
        },
        library: packages.name,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: ['style-loader', {
                loader: "css-loader",
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                },
            }, 'postcss-loader', 'less-loader'],
        }, {
            test: /\.(ico|mp4|ogg|png|jpe?g|gif|svg)(\?.*)?$/,
            use: [{
                loader: 'url-loader',
                query: {
                    limit: 10240
                }
            }],
            exclude: /node_modules/
        }, {
            test: /\.jsx?$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
        }, {
            test: /\.(ts|tsx|js)$/,
            use: ['babel-loader', 'ts-loader'],
            exclude: /node_modules/,
        }]
    },
    devtool: 'none',
    cache: true,
    resolve: {
        extensions: ['.web.js', '.js', '.jsx', '.tsx', '.less'],
        alias: {
            scripts: path.resolve(process.cwd(), 'scripts'),
            components: path.resolve(process.cwd(), 'components'),
        }
    },
}