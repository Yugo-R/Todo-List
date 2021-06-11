const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{
    mode: "production",
    output: {
        filename: 'main.[contenthash].js',
        path: path.join(__dirname, "dist"),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].[hash].css"}),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        })
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,"css-loader"]
            },
        ]
    }
});