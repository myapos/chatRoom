import React, { Component } from 'react';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
import PropTypes from 'prop-types';
import Display from '../components/Display';
import Entry from '../components/Entry';
import Enter from '../components/Enter';
import WhoIsTyping from '../components/WhoIsTyping';
import ListOfUsers from '../components/ListOfUsers';
import * as actions from '../store/actions';

import '../css/css.styl';
import '../css/fontawesome-free-5.7.2-web/css/all.css';
import { SERVER_PORT } from '../../../constants/common';

console.log('SERVER_PORT from client', SERVER_PORT);

let socket = {};
if (process.env.NODE_ENV === 'development') {
  socket = openSocket(`http://localhost:${SERVER_PORT}`);
} else {
  socket = openSocket('https://chatroomsimpledemo.herokuapp.com');
}

// https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34

class App extends Component {
  componentDidMount () {
    console.log('');
    const { resetIdleTickTimer, whoIsTyping } = this.props;
    typeof document !== 'undefined'
      && document.body.addEventListener('mouseover', () => {
        resetIdleTickTimer();
      });
    if (!socket._callbacks['$is typing'] || socket._callbacks['$is typing'].length < 1) {
      socket.on('is typing', who => {
        whoIsTyping(who);
      });
    }
  }

  render () {
    const { entered, resetIdleTickTimer } = this.props;

    // get value from storage

    const storedEnter = localStorage.getItem('entered');

    return (
      <div className="bigWrapper" >
        <div
          onClick={() => resetIdleTickTimer()}
          onFocus={() => resetIdleTickTimer()}
          className="wrapper" >
          {
            entered || storedEnter === 'true'
              ? <React.Fragment>
                <Display socket={socket} />
                <WhoIsTyping />
                <Entry socket={socket} />
              </React.Fragment>
              : <Enter />
          }
        </div>
        {
          entered || storedEnter === 'true'
            ? <ListOfUsers />
            : null
        }

      </div>
    );
  }
}

App.propTypes = {
  entered: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  resetIdleTickTimer: PropTypes.func,
  whoIsTyping: PropTypes.func,
};
export default connect(state => state, actions)(App);
