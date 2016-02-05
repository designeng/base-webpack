var webpack = require("webpack");

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
                test: /\.js$/, 
                loader: 'babel',
                exclude: /node_modules/
            }
    	]
    },
    plugins: [
    ],
    resolve: {
        modulesDirectories: [
            "app",
            "node_modules"
        ],
        extensions: [".json", ".js", ".spec"]
    },
}