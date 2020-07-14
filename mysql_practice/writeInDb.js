var conn = require('./connection');

conn.connect((err) => {
	
	if(err) throw err;
	
	var sql = "INSERT INTO identity (name, roll) VALUES ('Harry', 37)";

	conn.query(sql, ()=> {
		if(err) throw err;
		console.log("1 record inserted");
	})
	
})