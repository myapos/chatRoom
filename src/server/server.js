import express from 'express';
import http from 'http';
import io from 'socket.io';
import { SERVER_PORT } from '../../constants/common';
// import common from '../../constants/common';

// console.log('path:', path.dirname);

const app = express();
const http_ = http.Server(app);
const io_ = io(http_);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('OK!');
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/favicon.ico', (req, res) => {
  res.sendfile('./favicon.ico');
});

// app.get('/bundle', (req, res) => {
// res.send('OK!');
//   res.sendfile('./dist/bundle.js');
// });

app.get('/dist/*', (req, res) => {
  // console.log('got request for dist', req);
  // console.log('**************************************************************');
  res.sendfile(`.${req.path}`);
});

app.get('/health', (req, res) => res.send('OK!'));

io_.on('connection', socket => {
  socket.on('chat message', msg => {
    console.log('message: ' + msg);
    io_.emit('chat message', msg);
  });
});

io_.emit('some event', { for: 'everyone' });

console.log('SERVER_PORT', SERVER_PORT);
// console.log('common', common);

http_.listen(SERVER_PORT, () => {
  console.log(`listening on http://localhost:${SERVER_PORT}`);
});
