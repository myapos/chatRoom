import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

const handleMsg = (props) => {

  const { data, socket, receivedData } = props;
  socket.emit('chat message', data);

  //check socket callbacks to avoid multiple listeners and memory leaks

  if (!socket._callbacks['$chat message'] || socket._callbacks['$chat message'].length < 1) {
    socket.on('chat message', function (msg) {
      receivedData(msg);
    });
  }

  // console.log('sending', data);
}

const Button = (props) => <div
  className="myBtn"
  onClick={() => handleMsg(props)}>
  Send
  </div>

export default connect(state => state, actions)(Button);