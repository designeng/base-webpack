'use strict';

function wireLoader(source) {
    var filename = this.resourcePath;
    console.log("filename::::::::", filename);

    var result = "";

    // var result = "var wire = require('wire');";
    var result = "var wire = require('some-strange-package');";
    // var result = "import wire from 'some-strange-package';";
    // var result = "var wire = require('express');";
    
    // result += "wire(require('" + filename + "')).then(function(context) {
    //     console.log(context.message);
    // }, console.error);";

    console.log("result:::", filename);
    
    return result;   
}

module.exports = wireLoader;