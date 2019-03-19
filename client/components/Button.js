import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import onChatMsg from '../utils/onChatMsg';
import clearInput from '../utils/clearInput';

class Button extends Component {
  componentDidMount () {
    const { socket, receivedData, firstname, lastname } = this.props;
    // check socket callbacks to avoid multiple listeners and memory leaks

    if (!socket._callbacks['$chat message'] || socket._callbacks['$chat message'].length < 1) {
      socket.on('chat message', msg =>
        onChatMsg({
          receivedData,
          firstname,
          lastname,
          msg,
        })
      );
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
  receivedData: PropTypes.string,
  data: PropTypes.string,
  lastname: PropTypes.string,
  input: PropTypes.string,
  socket: PropTypes.object,
  firstname: PropTypes.string,
};

export default connect(state => state, actions)(Button);
