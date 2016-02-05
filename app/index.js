console.log("INDEX MODULE");

require.ensure(["./root"], function(require) {
    var one = require("./one");
    var two = require("./two");
});