const path = require('path');
const webpack = require('webpack');

const buildDir = './dist';
const publicPath = '/dist/';
const sourceDir = './src';
const entryFile = 'app.jsx'

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return [{
        stats: { modules: false },
        entry: { 'app': path.resolve(__dirname, sourceDir, entryFile) },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        output: {
            path: path.resolve(__dirname, buildDir),
            publicPath: publicPath,
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/i, include: path.resolve(__dirname, sourceDir),
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react'],
                            plugins: ['transform-decorators-legacy', 'transform-class-properties']
                        }
                    }
                },
                { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
            ]
        },
        plugins: [
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(buildDir, '[resourcePath]')  // Point sourcemap entries to the original file locations on disk
            })
        ]
    }];
}
