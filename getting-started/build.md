# Build

---



## Webpack.config.js

```js
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
                // Remove this line if you prefer inline source maps
                filename: '[file].map', 
                // Point sourcemap entries to the original file locations on disk
                moduleFilenameTemplate: path.relative(buildDir, '[resourcePath]')  
            })
        ]
    }];
}
```

The above file instructs the webpack bundle tool on how to transpile the human written JavaScript a format usable by web browsers. `npm run build` will run webpack . 

```bash
# Select a different config file
npm run build -- --config "path/to/config.js"
# Build for produciton
npm run build -- --prod
```

The above file instructs webpack on how to transpile the JavaScript in our project to a format usable by web browsers. The file starts off by defining some project specific locations such as where the original JS source code lives, where built code will be placed and the entry JS file that kicks off the whole build process.

