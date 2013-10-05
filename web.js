var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
  console.log("request = " + request);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


/*
var githubhook = require('githubhook');
var github = githubhook({ port: process.env.PORT || 3240 });

github.listen();

github.on('push:https://github.com/keith5000/USGlossary/tree/CommitTest', function (ref, data) {
	response.send("push");
});

github.on('commit:https://github.com/keith5000/USGlossary/tree/CommitTest', function (ref, data) {
	response.send("commit");
});
*/