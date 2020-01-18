var http=require('http');
var fs=require('fs');
var file='mynewentryfile.txt';

http.createServer(function(req, res){
	fs.writeFile(file, 'Hello Content!', function (err){
		if(err) throw err;
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<p>'+file+' has been overwritten!</p>');
		res.end();
	});
}).listen(8000);