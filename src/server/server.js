import express from 'express';
import http from 'http';
import io from 'socket.io';
import path from 'path';
import { SERVER_PORT } from '../../constants/common';

const app = express();
const http_ = http.Server(app);
const io_ = io(http_);

app.get('/', (req, res) => {
  res.sendFile(path.join() + '/staticFiles/index.html');
});

app.get('/health', (req, res) => res.send('OK!'));

io_.on('connection', socket => {
  socket.on('chat message', msg => {
    console.log('message: ' + msg);
    io_.emit('chat message', msg);
  });
});

io_.emit('some event', { for: 'everyone' });

http_.listen(SERVER_PORT, () => {
  console.log(`listening on http://localhost:${SERVER_PORT}`);
});
