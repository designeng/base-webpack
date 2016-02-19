console.log("INDEX MODULE");

require.ensure(["./root"], function(require) {
    var log = require("./log");
    log();
    var two = require("./two");
});