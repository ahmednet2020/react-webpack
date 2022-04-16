const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env, {
    mode
}) => ({
    optimization: {
        "minimize": mode === 'development' ? false : true
    },
    mode:mode,
    devtool: (mode === 'development' ? 'inline-source-map' : false),
    entry: './src/Index.tsx',
    output: {
        filename: "assats/js/bundle.js",
        path: path.resolve(__dirname, "public/")
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".scss", ".json"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: ["babel-loader", "ts-loader"],
            exclude: /node_modules/,
            include: [path.resolve(__dirname, "src")]
        }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            exclude: /node_modules/,
            include: [path.resolve(__dirname, "src")]
        }],
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'assats/css/[name].css',
        chunkFilename: '[id].css',
    })],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public/'),
        },
        compress: true,
        hot: true,
        open:true,
        historyApiFallback: true,
    }
})