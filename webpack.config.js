const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        App: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        filename: "[name][contenthash].js",
        path: path.resolve(__dirname, "build"),
        clean: true

    },
    mode: "production",
    // mode: "development"
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html")
    })]
};