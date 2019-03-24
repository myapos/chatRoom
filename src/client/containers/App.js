import React from 'react';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
import PropTypes from 'prop-types';
import Display from '../components/Display';
import Entry from '../components/Entry';
import Enter from '../components/Enter';
import * as actions from '../store/actions';

import '../css/css.styl';
import '../css/fontawesome-free-5.7.2-web/css/all.css';
import { SERVER_PORT } from '../../../constants/common';

console.log('SERVER_PORT from client', SERVER_PORT);

const socket = openSocket(`http://localhost:${SERVER_PORT}`);

// https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34

const App = props => {
  const { entered } = props;

  // get value from storage

  const storedEnter = localStorage.getItem('entered');

  return (<div className="wrapper">
    {
      entered || storedEnter === 'true'
        ? <React.Fragment>
          <Display socket={socket} />
          <Entry socket={socket} />
        </React.Fragment>
        : <Enter />
    }
  </div>);
};

App.propTypes = {
  entered: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
export default connect(state => state, actions)(App);
