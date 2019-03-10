import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const handleChange = (e, props) => {
  console.log('e:', e.target.value);

  const { socket, receivedData, entryChange } = props;
  entryChange(e.target.value);
  socket.emit('chat message', e.target.value);

  socket.on('chat message', function (msg) {
    // console.log('received:', msg);
    receivedData(msg);
  });
}

const Entry = (props) => <div>
  <input
    className="entry"
    onChange={e => handleChange(e, props)}
    placeholder="type your message"></input>
</div>


export default connect(state => state, actions)(Entry);