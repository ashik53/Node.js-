
//exports database connection
var conn = require('./connection');

// conn.con.connect((err) => {
// 	if(err) throw err;
// 	console.log("connected");
// })

//check connection
conn.connect((err) => {
	if(err) throw err;
	console.log("connected")
	
})