var http = require("http");
http.createServer(function (request, response) {
	response.writeHead(200,{
		'Content-Type': 'text/plain'
	});
	response.write('Hello World');
	response.end();
	console.log("Node.js server running on port 8080.");
}).listen(8080);