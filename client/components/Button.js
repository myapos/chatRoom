import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

const handleMsg = (props) => {
  const { data, socket } = props;
  socket.emit('chat message', data);
  console.log('sending', data);
}

const Button = (props) => <div
  className="myBtn"
  onClick={handleMsg(props)}>
  Send
  </div>

export default connect(state => state, actions)(Button);