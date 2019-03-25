/* eslint-disable react/jsx-filename-extension */
import React, { useRef } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Button from './Button';
import Exit from './Exit';
import * as actions from '../store/actions';
import onChatMsg from '../utils/onChatMsg';
import clearInput from '../utils/clearInput';

const handleChange = (e, props) => {
  // console.log('e:', e.target.value);
  const { entryChange } = props;
  entryChange(e.target.value);
};

const handleKeyPress = (e, props, inputEl) => {
  const { socket, firstname, lastname } = props;

  // is typing
  socket.emit('is typing', `${firstname} ${lastname}`);

  if (e.key.match(/enter/gi)) {
    console.log('pressed enter');

    const { data, receivedData } = props;
    socket.emit('chat message', `${firstname} ${lastname} ${data}`);
    clearInput(inputEl);
    // check socket callbacks to avoid multiple listeners and memory leaks

    if (!socket._callbacks['$chat message'] || socket._callbacks['$chat message'].length < 1) {
      socket.on('chat message', msg =>
        onChatMsg({
          receivedData,
          msg,
        })
      );
    }

    // reset is typing
    socket.emit('is typing', '');
  }

  // reset tick timer

  props.resetIdleTickTimer();
};

const Entry = props => {
  const inputEl = useRef(null);

  return (
    <div className="entryWrapper">
      <input
        className="entry"
        ref={inputEl}
        type="text"
        onChange={e => handleChange(e, props)}
        onKeyPress={e => handleKeyPress(e, props, inputEl)}
        placeholder="type your message" />
      <i className="fas fa-backspace custom" onClick={() => clearInput(inputEl)} />
      <Button
        className="button" input={inputEl}
        socket={props.socket} />
      <Exit
        className="button" />
    </div>
  );
};

Entry.propTypes = {
  socket: PropTypes.object,
  whoIsTyping: PropTypes.func,
};
export default connect(state => state, actions)(Entry);
