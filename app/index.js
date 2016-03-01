console.log("INDEX MODULE");

var spec = require('./one.spec');

document.getElementById('one').onclick = function() {
    require.ensure([], function(require) {
        var one = require("./assets/one");
    }, 'assets');
    console.log("SPEC:::", spec);
}

document.getElementById('two').onclick = function() {
    require.ensure([], function(require) {
        var two = require("./assets/two");
    }, 'assets');
}

document.getElementById('three').onclick = function() {
    require.ensure([], function(require) {
        var three = require("./assets/three");
    }, 'other');
}