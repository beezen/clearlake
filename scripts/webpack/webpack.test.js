let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let fs = require("fs");
let rootPath = path.resolve(process.cwd());
let componentsPath = path.resolve(process.cwd(), 'components');
let testList = {};
fs.readdirSync(componentsPath).filter(e => {
    return path.parse(e).ext == "" && !/^\./.test(path.parse(e).name);
}).forEach((e) => {
    try {
        if (!fs.accessSync(`${componentsPath}/${e}/_tests_`)) {
            fs.readdirSync(`${componentsPath}/${e}/_tests_`).filter(ee => {
                return /\-test/.test(path.parse(ee).name);
            }).forEach(ee => {
                testList[e] = path.resolve(componentsPath, e, '_tests_', ee);
            });
        }
    } catch (err) {
        // throw 
    }
});
module.exports = {
    mode: 'development',
    entry: testList,
    output: {
        pathinfo: true,
        path: path.resolve(rootPath, 'test'),
        filename: "[name]/[name]-test.js"
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
            test: /\.(ts|tsx)$/,
            use: ['babel-loader', 'ts-loader'],
            exclude: /node_modules/,
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(process.cwd(), '@tpl/@test/test.html'),
            filename: `index.html`,
        }),
        ...Object.keys(testList).map(e =>
            new HtmlWebpackPlugin({
                template: path.resolve(process.cwd(), '@tpl/@test/test.html'),
                filename: `${e}/index.html`,
                chunks: [e]
            })
        )
    ],
    devtool: 'cheap-module-eval-source-map',
    cache: true,
    resolve: {
        extensions: ['.web.js', '.js', '.jsx', '.tsx', '.less'],
        alias: {
            scripts: path.resolve(process.cwd(), 'scripts'),
            components: path.resolve(process.cwd(), 'components'),
        }
    },
    devServer: {
        disableHostCheck: true,
        contentBase: path.resolve(process.cwd(), 'test'),
        compress: true,
        port: 8003,
        host: "0.0.0.0",
        hot: true,
        inline: true,
        noInfo: false,
        open: true,
        stats: 'minimal',
    }
}