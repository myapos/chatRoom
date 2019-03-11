import React, { useRef } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import * as actions from '../store/actions';
import onChatMsg from '../utils/onChatMsg';

const handleChange = (e, props) => {
  // console.log('e:', e.target.value);
  const { entryChange } = props;
  entryChange(e.target.value);
}

const handleKeyPress = (e, props) => {
  if (e.key.match(/enter/ig)) {
    console.log('pressed enter');

    const { data, socket, receivedData, firstname, lastname } = props;
    socket.emit('chat message', data);

    //check socket callbacks to avoid multiple listeners and memory leaks

    if (!socket._callbacks['$chat message'] || socket._callbacks['$chat message'].length < 1) {
      socket.on('chat message', msg => onChatMsg({
        receivedData,
        firstname,
        lastname,
        msg
      }));
    }
  }
}

const clearInput = (inputEl) => {
  console.log('entry', inputEl);
  inputEl.current.value = '';
}

const Entry = (props) => {
  const inputEl = useRef(null);

  return <div className="entryWrapper">
    <input
      className="entry"
      ref={inputEl}
      type="text"
      onChange={e => handleChange(e, props)}
      onKeyPress={e => handleKeyPress(e, props)}
      placeholder="type your message" />
    <i className="fas fa-backspace custom"
      onClick={() => clearInput(inputEl)}></i>
    <Button
      className="button"
      socket={props.socket} />
  </div>
}

export default connect(state => state, actions)(Entry);