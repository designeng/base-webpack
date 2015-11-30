module.exports = {
    context: __dirname + "/app",
    entry: "./index",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    loaders: [
		{
	        test: /\.spec$/,
	        loader: __dirname + '/loaders/wire/index'
	    }
	]
}