var conn = require('./connection');

conn.connect((err) => {
	
	if(err) throw err;
	
	var sql = "DELETE FROM identity WHERE roll = 37";

	conn.query(sql, (err, result)=> {
		if(err) throw err;
		console.log("deleted " + result.affectedRows + " records");
	})
	
})