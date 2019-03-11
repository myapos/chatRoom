import React from 'react';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
import Display from '../components/Display';
import Entry from '../components/Entry';
import Enter from '../components/Enter';
import * as actions from '../store/actions';

import '../css/css.styl';
import '../css/fontawesome-free-5.7.2-web/css/all.css';
import { SERVER_PORT } from '../../constants/common';

const socket = openSocket(`http://localhost:${SERVER_PORT}`);

// https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34

const App = (props) =>
  <div className="wrapper">
    {
      props.entered ?
        <React.Fragment>
          < Display socket={socket} />
          <Entry socket={socket} />
        </React.Fragment>
        : <Enter />
    }
  </div>

export default connect(state => state, actions)(App);