var http=require('http');
var fs=require('fs');

http.createServer(function(req, res){
	fs.open('mynewentryfile.txt', 'w', function(err, file){
	if(err) throw err;
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('New file created!<br>'+file);
	res.end();
	});
}).listen(8000);