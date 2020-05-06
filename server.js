var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.use(express.static('public'));

app.get('/', function(req, res){
	res.send('index');
});


server.listen(8080,'localhost',function(){
	console.log('http server listen on port 8080');
});