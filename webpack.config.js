var webpack = require("webpack");
var umdRequireWebpackPlugin = require("umd-require-webpack-plugin");

module.exports = {
    context: __dirname + "/app",
    entry: "./index",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
    		{
    	        test: /\.spec$/,
    	        loader: __dirname + '/loaders/wire/index'
    	    }
            // {include: /\.js$/, loaders: ["babel-loader?stage=0&optional=runtime&plugins=typecheck"], exclude: /node_modules/}
    	]
    },
    plugins: [
        // new webpack.DefinePlugin({ "global.GENTLY": false }),
        // new umdRequireWebpackPlugin()
    ],
    resolve: {
        modulesDirectories: [
            "app",
            "node_modules"
        ],
        extensions: [".json", ".js", ".spec"]
    },
}