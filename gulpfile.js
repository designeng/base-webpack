var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");

config = require("./webpack.config");

gulp.task('clean', function(cb) {
 	console.log("cleaned");
});

gulp.task("webpack", function(callback) {
    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});