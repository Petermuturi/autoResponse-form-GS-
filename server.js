var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send("Hello there");
});

var port = Number(process.env.PORT || 3000);

app.listen(port, function(){
	console.log('server listening on port 3000');
});