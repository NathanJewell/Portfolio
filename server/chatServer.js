
var express = require('express')
var path = require('path');
var app = express()
var io = require('socket.io')(http);
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '/public/chatserver', 'index.html'));
});

io.on('connection', function(socket) {
    console.log('A user connected');
});

app.listen(app.get('port'), function() {
  console.log("Chat server is running at ... publicip:" + app.get('port'))
});

