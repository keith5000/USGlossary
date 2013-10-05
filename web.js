var githubhook = require('githubhook');
var github = githubhook({/* options */});

github.listen();

github.on('push:https://github.com/keith5000/USGlossary/tree/CommitTest', function (ref, data) {
	response.send("push");
});

github.on('commit:https://github.com/keith5000/USGlossary/tree/CommitTest', function (ref, data) {
	response.send("commit");
});