import path from "path";
import merge from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import "webpack-dev-server";

import common from "./webpack.common";

const config: webpack.Configuration = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "build")
        },
        historyApiFallback: true,
        port: 8080,
        compress: true,
        devMiddleware: {
            writeToDisk: true
        }
    },
    mode: "development",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].css"
        })
    ]
});

export default config;
