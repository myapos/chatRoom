import React from 'react';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
import Button from '../components/Button';
import Display from '../components/Display';
import Entry from '../components/Entry';
import * as actions from '../store/actions';

import '../css/css.styl';
import { SERVER_PORT } from '../../constants/common';

const socket = openSocket(`http://localhost:${SERVER_PORT}`);

// https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34

const App = (props) => <div className="wrapper">
  <Display socket={socket} />
  <Entry socket={socket} />
  { /* <Button socket={socket} /> */}
</div>

export default connect(state => state, actions)(App);