var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var port = 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/staticFiles/index.html');
});

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

io.emit('some event', { for: 'everyone' });


http.listen(port, function () {
  console.log(`listening on http://localhost:${port}`);
});