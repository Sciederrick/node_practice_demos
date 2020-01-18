var http=require('http');
var fs=require('fs');
var file='mynewfile1.txt';
http.createServer(function(req, res){
	fs.unlink(file, function(err){
		if(err) throw err;
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<p><em>'+file+'</em> deleted!</p>');
		res.end();
	});
}).listen(8000);