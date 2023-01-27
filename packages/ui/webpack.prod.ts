import merge from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import "webpack-dev-server";

import common from "./webpack.common";

const config: webpack.Configuration = merge(common, {
    devtool: false,
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    type: "css/mini-extract",
                    chunks: "all",
                    enforce: true
                }
            }
        }
    },
    mode: "production",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
});

export default config;
