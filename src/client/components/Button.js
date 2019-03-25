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

    // check if there are any values in localStore

    const stored = localStorage.getItem('received');
    const firstname = localStorage.getItem('firstname');
    const lastname = localStorage.getItem('lastname');

    const hasPreviousReceived = JSON.parse(stored);
    if (hasPreviousReceived && hasPreviousReceived.length) {
      this.props.setUserInfo(firstname, lastname);

      this.props.setPreviousData(hasPreviousReceived);
    }
  }

  handleMsg () {
    const { data, socket, firstname, lastname, input, whoIsTyping } = this.props;
    socket.emit('chat message', `${firstname} ${lastname} ${data}`);
    clearInput(input);
    // reset is typing
    socket.emit('is typing', '');
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
  setPreviousData: PropTypes.func,
  setUserInfo: PropTypes.func,
  data: PropTypes.string,
  lastname: PropTypes.string,
  input: PropTypes.object,
  socket: PropTypes.object,
  firstname: PropTypes.string,
};

export default connect(state => state, actions)(Button);
