var thrift = require('thrift');
var Butikk = require("./gen-nodejs/Butikk");
var tbutikk = require("./gen-nodejs/butikk_types");

transport = thrift.TBufferedTransport()
protocol = thrift.TBinaryProtocol()

var connection = thrift.createConnection("localhost", 9090, {
  transport : transport,
  protocol : protocol
});

connection.on('error', function(err) {
  assert(false, err);
});

var client = thrift.createClient(Butikk, connection);

client.harVare(1, function(err, response) {
  console.log("harVare");
  console.log(err);
  console.log(response);
  connection.end();
});

