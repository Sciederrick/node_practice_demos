var http=require('http');
var fs=require('fs');
var file='mynewentryfile.txt';
var new_name='myrenamedfile.txt';

http.createServer(function(req, res){
	fs.rename(file, new_name, function(err){
		if(err) throw err;
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<p><em>'+file+'</em> renamed to <em>'+new_name+'</em></p>');
		res.end();
	});
}).listen(8000);