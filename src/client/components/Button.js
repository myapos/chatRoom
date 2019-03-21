import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import onChatMsg from '../utils/onChatMsg';
import clearInput from '../utils/clearInput';

class Button extends Component {
  componentDidMount () {
    const { socket, receivedData } = this.props;
    // check socket callbacks to avoid multiple listeners and memory leaks

    if (!socket._callbacks['$chat message'] || socket._callbacks['$chat message'].length < 1) {
      socket.on('chat message', msg =>
        onChatMsg({
          receivedData,
          msg,
        })
      );
    }

    // check if there are any valus in localStore

    const stored = localStorage.getItem('received');

    const hasPreviousReceived = JSON.parse(stored);

    if (hasPreviousReceived.length) {
      // debugger;
      console.log(hasPreviousReceived);
      onChatMsg({
        receivedData,
        hasPreviousReceived,
      });
    }
  }

  handleMsg () {
    const { data, socket, firstname, lastname, input } = this.props;
    socket.emit('chat message', `${firstname} ${lastname}: ${data}`);
    clearInput(input);
  }

  render () {
    return (
      <div className="myBtn" onClick={() => this.handleMsg(this.props)}>
        Send
      </div>
    );
  }
}

Button.propTypes = {
  receivedData: PropTypes.func,
  data: PropTypes.string,
  lastname: PropTypes.string,
  input: PropTypes.object,
  socket: PropTypes.object,
  firstname: PropTypes.string,
};

export default connect(state => state, actions)(Button);
