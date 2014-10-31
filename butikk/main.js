var thrift = require("thrift");
var Butikk = require("./gen-nodejs/Butikk");
var tbutikk = require("./gen-nodejs/butikk_types");

var data = {};

var server = thrift.createServer(Butikk, {
	harVare: function(id, result) {
		console.log("harVare: " + id);
		result(true);
	}
});

console.log("Server running");
server.listen(9090);