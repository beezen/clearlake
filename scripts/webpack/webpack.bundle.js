let path = require('path');
let webpack = require('webpack');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')
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
        path: path.resolve(rootPath, 'lib'),
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
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                parallel: true,
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    compress: {
                        dead_code: true
                    }
                }
            })
        ],
        // splitChunks: {
        //     chunks: 'all',
        //     minSize: 10,
        //     maxSize: 0,
        //     minChunks: 1,
        //     maxAsyncRequests: 5,
        //     maxInitialRequests: 3,
        //     automaticNameDelimiter: '~',
        //     name: true,
        //     cacheGroups: {
        //         // commons: {
        //         //     name: 'commons',
        //         //     chunks: 'initial',
        //         //     minChunks: 2
        //         // },
        //         vendors: {
        //             test: /[\\/]node_modules[\\/]/,
        //             priority: -10
        //         },
        //         default: {
        //             minChunks: 2,
        //             priority: -20,
        //             reuseExistingChunk: true
        //         }
        //     }
        // }
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