
var express = require('express')
var path = require('path');
var app = express()

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public/portfolio'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '/public/portfolio', 'index.html'));
  response.sendFile(path.join(__dirname, '/public/portfolio', 'script.js'));
  response.sendFile(path.join(__dirname, '/public/portfolio', 'style.css'));
  response.sendFile(path.join(__dirname, '/public/portfolio', 'uparrow.png'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at publicip:" + app.get('port'))
});

