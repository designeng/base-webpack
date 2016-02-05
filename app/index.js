console.log("INDEX MODULE");

require.ensure(["./test"], function(require) {
    var one = require("./one");
    var two = require("./two");
});