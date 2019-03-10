import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions';


class Button extends Component {

  componentDidMount() {
    const { socket, receivedData } = this.props;
    //check socket callbacks to avoid multiple listeners and memory leaks

    if (!socket._callbacks['$chat message'] || socket._callbacks['$chat message'].length < 1) {
      socket.on('chat message', msg => {
        receivedData(msg);
      });
    }
  }

  handleMsg() {
    const { data, socket } = this.props;
    socket.emit('chat message', data);
  };

  render() {
    return (<div
      className="myBtn"
      onClick={() => this.handleMsg(this.props)}>
      Send
  </div>)
  }
}

export default connect(state => state, actions)(Button);