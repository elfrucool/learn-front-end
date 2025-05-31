// this is a template to be imported/overrided in each micro-frontend rspack.config.library.js

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
            type: 'commonjs2',
        },
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
                        transpileOnly: false, // false for type declarations
                        compilerOptions: {
                            declaration: true,
                            declarationDir: 'dist',
                            jsx: 'react-jsx',
                            // allowJs: true, ?? is it needed ?
                        },
                    },
                },
            },
            // uncomment next line if libraries contain CSS (or perhaps override on each library)
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader'],
            // },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    externals: {
        // Don't bundle these - expect the consumer to provide them
        'react': 'react',
        'react-dom': 'react-dom',
        '@mui-material': '@mui/material',
        '@emotion-react': '@emotion/react',
        '@emotion-styled': '@emotion/styled',
        'mobx': 'mobx',
        'mobx-react-lite': 'mobx-react-lite',
        'react-router-dom': 'react-router-dom',
    }
};