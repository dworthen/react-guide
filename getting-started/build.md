# Build

---

## Webpack.config.js

---



```js
module.exports = (env) => {
  return {
    entry: './src/app.jsx',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        { 
          test: /.jsx?$/, 
          exclude: /node_modules/,  
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          }
        }
      ]
    }
  }
};
```


