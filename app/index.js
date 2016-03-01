// var wire = require('wire');

console.log("INDEX MODULE");

// var lib1 = require("./lib1");

document.getElementById('one').onclick = function() {
    require.ensure([], function(require) {
        var one = require("./assets/one");
    }, 'assets');
}

document.getElementById('two').onclick = function() {
    require.ensure([], function(require) {
        var two = require("./assets/two");
    }, 'assets');
}

document.getElementById('three').onclick = function() {
    require.ensure([], function(require) {
        var three = require("./assets/three");
    });
}