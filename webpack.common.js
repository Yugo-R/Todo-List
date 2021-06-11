const path = require("path");

module.exports = {
    entry: {
        index: './src/index.js'
      },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    }
};