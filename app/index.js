var wire = require('essential-wire');
console.log("INDEX MODULE");

var spec = require('./specs/component.spec.coffee');
console.log("SPEC:::", spec);

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
    }, 'other');
}

wire(spec).then(function(context){
    console.log(console.log(context));
}).otherwise(function(error){
    console.log(console.log(error));
})