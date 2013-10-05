var express = require("express");
var util = require('util');
var app = express();
app.use(express.logger());
app.use(express.bodyParser());

/* not needed - left for testing purposes */
app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.post('/', function(request, response) {
	if (!request || !request.body || !request.body.commits) return;
	
	console.log("request = " + util.inspect(request.body));
	
	var masterBranchBaseUrl = "https://raw.github.com/keith5000/USGlossary/";
	
	for (var commitCount=0; commitCount < request.body.commits.length; commitCount++) {
		for (var addedCount=0; addedCount < request.body.commits.added; addedCount++) {
			var rawFileUrl = masterBranchBaseUrl + request.body.commits.added[addedCount];
			console.log("Added url: " + rawFileUrl);
		}
		
		for (var modifiedCount=0; modifiedCount < request.body.commits.modified; modifiedCount++) {
			var rawFileUrl = masterBranchBaseUrl + request.body.commits.modified[modifiedCount];
			console.log("Modified url: " + rawFileUrl);
		}
	}
  
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