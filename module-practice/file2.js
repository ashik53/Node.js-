hi1 = {
	printSomething: function(req){
		console.log(req);
	},
	consoleSomething: function(req){
		console.log(req)
	}

}

hi2 = {
	harami: function(hi){
		console.log(hi)
	}
}

module.exports.hi1 = hi1;
module.exports.hi2 = hi2;

	
