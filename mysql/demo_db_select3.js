var mysql=require('mysql');

var con=mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "node_practice"
});

var name='Amy';
var adr='Mountain 21';
var sql='SELECT * FROM customers WHERE name=? OR address=?';

con.connect(function(err){
	if(err) throw err;
	con.query(sql, [name, adr], function(err, result, fields){
		if(err) throw err;
		console.log(result);
	});
});

