var webpack = require("webpack");

module.exports = {
    context: __dirname + "/app",
    entry: "./index",
    output: {
        path: __dirname + "/public/build/",
        publicPath: "/build/",
        filename: "bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module: {
        loaders: [
            {   
                test: /\.js$/, 
                loader: 'babel',
                exclude: /node_modules/
            }
        ],

        noParse: /wire\/wire.js/
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // })
    ],
    resolve: {
        modulesDirectories: [
            "app",
            "node_modules"
        ],
        extensions: [".json", ".js"]
    },
}