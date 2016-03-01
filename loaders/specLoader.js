var coffee = require('coffee-script');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var result = coffee.compile(source);
  return result;
};