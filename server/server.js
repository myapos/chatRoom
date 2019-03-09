import express from 'express';
import http from 'http';
import io from 'socket.io';
import { SERVER_PORT } from '../constants/common';

const app = express();
const http_ = http.Server(app);
const io_ = io(http_);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/staticFiles/index.html');
});

io_.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg);
    io_.emit('chat message', msg);
  });
});

io_.emit('some event', { for: 'everyone' });

http_.listen(SERVER_PORT, function () {
  console.log(`listening on http://localhost:${SERVER_PORT}`);
});
