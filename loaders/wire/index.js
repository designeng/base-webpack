'use strict';

function wireLoader(source) {
    var filename = this.resourcePath;
    console.log("filename::::::::", filename);

    var result = "var wire = require('wire');";
    
    // result += "wire(require('" + filename + "')).then(function(context) {
    //     console.log(context.message);
    // }, console.error);";

    console.log("result:::", filename);
    
    return result;   
}

module.exports = wireLoader;