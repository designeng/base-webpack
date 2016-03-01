var webpack = require("webpack");
var specLoader = require("./loaders/specLoader");

module.exports = {
    context: __dirname + "/app",
    entry: "./index",
    output: {
        path: __dirname + "/public/build/",
        publicPath: "/build/",
        filename: "bundle.js",
        chunkFilename: "[id].[name].js"
    },
    module: {
        loaders: [
            {   
                test: /\.spec\.coffee$/, 
                loaders: ['../loaders/specLoader'],
                exclude: /node_modules/
            },
            {   
                test: /\.js$/, 
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
    ]
}