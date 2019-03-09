import React from 'react';
import openSocket from 'socket.io-client';
import { SERVER_PORT, dummyMsg } from '../../constants/common';

const socket = openSocket(`http://localhost:${SERVER_PORT}`);

const handleMsg = () => {
  socket.emit('chat message', dummyMsg);
}

const MyForm = () => <div
  className="myForm"
  onClick={handleMsg}>
  Send
  </div>

export default MyForm;