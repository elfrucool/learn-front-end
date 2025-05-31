// this is a template to be imported/overrided in each micro-frontend rspack.config.standalone.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/standalone.tsx', // entry point for testing micro-frontend in isolation
    output: {
        path: path.resolve(__dirname, 'dist-standalone'), // different directory for standalone build
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        compilerOptions: {
                            jsx: 'react-jsx',
                            allowJs: true,
                        },
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            // Point to shared source directly for standalone dev
            'shared': path.resolve(__dirname, '../shared/src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        // port: need to override the port in each micro-frontend rspack.config.standalone.js
        hot: true,
        historyApiFallback: true,
    },
};