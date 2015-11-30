var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var port = 7788;

app.use(express.static(path.join(__dirname, 'dist')));

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + port);
});