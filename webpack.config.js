module.exports = {
    // ... other configurations ...

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        // ... other rules for styles, images, etc.
      ]
    },
  
    // Make sure Webpack processes .jsx files
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  
    // ... other configurations ...
  };
  