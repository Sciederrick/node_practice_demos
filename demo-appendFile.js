var http=require('http');
var fs=require('fs');
http.createServer(function (req, res){
	fs.appendFile('mynewfile1.txt', 'Hello content!', function(err){
	if(err) throw err;
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Saved');
	res.end();
	});
}).listen(8000);