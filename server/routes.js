var express = require('express');
var app = express();

require('./expressConfig')(app, express);

app.get('/playbook', function(req, res) {
  res.sendFile('playbook.html', {root: app.settings.views});
});

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: app.settings.views});
});

module.exports = app;
