var conn = require('./connection');


let line = 2;
conn.connect((err) => {
	
	if(err) throw err;
	
	var sql = "DELETE FROM identity WHERE roll = " + line; //dyanmic value

	conn.query(sql, (err, result)=> {
		if(err) throw err;
		console.log("deleted " + result.affectedRows + " records");
	})
	
})