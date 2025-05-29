const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './packages/dashboard/src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
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
            '@packages': path.resolve(__dirname, 'packages/'), // for future use
            '@': path.resolve(__dirname, 'src/'), // how it differs from tsconfig.json @/* ? can I just use @ instead of @src ?

            // workspace aliases
            'shared': path.resolve(__dirname, 'packages/shared/src'),
            'auth': path.resolve(__dirname, 'packages/auth/src'),
            'dashboard': path.resolve(__dirname, 'packages/dashboard/src'),
            'container': path.resolve(__dirname, 'packages/container/src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true, // to enable react routes
    },
};