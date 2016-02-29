console.log("INDEX MODULE");

var lib1 = require("./lib1");

require.ensure(["./root"], function(require) {
    var log = require("./log");
    log();
});