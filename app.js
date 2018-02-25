var express = require('express');
var serveStatic = require('serve-static')
var app     = express();

app.use(express.static(__dirname + '/node_modules/freeboard'));
app.use(express.static(__dirname + '/node_modules/serve-static'));

var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Freeboard running at http://%s:%s', host, port);

});
