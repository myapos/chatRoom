import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import * as actions from '../store/actions';

const handleChange = (e, props) => {
  // console.log('e:', e.target.value);
  const { entryChange } = props;
  entryChange(e.target.value);
}

const handleKeyPress = (e, props) => {
  if (e.key.match(/enter/ig)) {
    console.log('pressed enter');

    const { data, socket, receivedData } = props;
    socket.emit('chat message', data);

    //check socket callbacks to avoid multiple listeners and memory leaks

    if (!socket._callbacks['$chat message'] || socket._callbacks['$chat message'].length < 1) {
      socket.on('chat message', function (msg) {
        receivedData(msg);
      });
    }

  }

}
const Entry = (props) => <div className="entryWrapper">
  <input
    className="entry"
    onChange={e => handleChange(e, props)}
    onKeyPress={e => handleKeyPress(e, props)}
    placeholder="type your message"></input>
  <Button
    className="button"
    socket={props.socket} />
</div>


export default connect(state => state, actions)(Entry);