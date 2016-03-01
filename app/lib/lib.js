(function(define) {
define(function(require) {
    // var two = require('./two');
    console.log("1234567");
});
}(typeof define === 'function' && define.amd ? define : function(factory) { 
    module.exports = factory(require); 
}));
