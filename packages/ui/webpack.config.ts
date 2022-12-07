import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import Dotenv from "dotenv-webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import webpack from "webpack";
import "webpack-dev-server";

const { env } = process;
env.NODE_ENV = env.NODE_ENV ?? "development";
const IS_PRODUCTION = env.NODE_ENV === "production";
const WEBPACK_MODE: webpack.Configuration["mode"] = IS_PRODUCTION
    ? "production"
    : "development";

const config: webpack.Configuration = {
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "build")
        },
        port: 3000,
        compress: true
    },
    mode: WEBPACK_MODE,
    entry: "./src/index.tsx",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            ["@babel/preset-react", { runtime: "automatic" }],
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    IS_PRODUCTION
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "src/")
        },
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(),
        new Dotenv({
            path: `./src/environments/.env.${WEBPACK_MODE}`
        })
    ]
};

export default config;
