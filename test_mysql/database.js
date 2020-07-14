const { createPool } = require('mysql');

const pool = createPool({
	host: "localhost",
	user: "root",
	password: "",
	database: "test",
	connectionLimit: 10
})

pool.query(`select * from identity where roll  = ?`, [3], (err, result, fields) => {
	if(err){ 
		return console.log(err)
	}
	return console.log(result)
})