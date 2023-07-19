const path = require('path');

const getAbsolutePath = (pathDir) => path.resolve(__dirname, pathDir);

module.exports = () => {
    return {
        mode: 'production',
        entry: {
            main: './src/index.ts',
        },
        output: {
            path: getAbsolutePath('dist'),
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: [/node_modules/],
                    loader: 'ts-loader',
                },
            ],
        },
        resolve: { extensions: ['.ts'] },
    };
};
