import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { idleThreshold, idleStep } from '../../../constants/common';

import * as actions from '../store/actions';

class Display extends Component {
  componentDidMount () {
    const {
      entered,
      idleInterval,
      setIdleInterval,
      setIdleTickTimer,
      loggedUsers,
    } = this.props;

    if (entered !== '' && idleInterval === 0) {
      const interval = setInterval(async () => {
        // increase tick
        const newTick = this.props.tick + idleStep;
        setIdleTickTimer(newTick);

        const { reference } = this.props;
        const ref = reference;
        // console.log('ref should:', ref);
        ref
          && ref.on(
            'value',
            snapshot => {
              // console.log(snapshot.val());
              loggedUsers(snapshot.val());
            },
            errorObject => {
              console.log('The read failed: ' + errorObject.code);
            }
          );
      }, idleStep);

      // keep interval refenrence to the store
      setIdleInterval(interval);
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    const { entered, tick, idleInterval, reference, loggedUsers } = nextProps;

    if (entered !== '' && tick > idleThreshold) {
      // clear interval
      clearInterval(idleInterval);
      nextProps.exit();
      nextProps.loggedOut();
    }

    return true;
  }
  render () {
    return (
      <div className="displayWrapper">
        <div className="display">
          {this.props.received.map(meta => {
            meta.msg = meta.msg.replace('\n', '');
            meta.msg = meta.msg.trim();

            const firstAndLastName
              = meta.msg.split(/ /gi)[0] + ' ' + meta.msg.split(/ /gi)[1];

            const dateAndTimeInfo = meta.msg.match(
              /\(\d+\/\d+\/\d+\s\d+:\d+:\d+\)/
            )[0];

            const msgAndUserAr = meta.msg.split(
              /\(\d+\/\d+\/\d+\s\d+:\d+:\d+\)/
            )[0];

            const msg = msgAndUserAr
              .split(/\s/)
              .slice(2)
              .join(' ');

            return (
              <div className="row" key={meta.timestamp}>
                <div className="whoIsIt">{firstAndLastName}</div>
                {msg}
                <div className="dateAndTimeInfo">{dateAndTimeInfo}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Display.propTypes = {
  entered: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tick: PropTypes.number,
  exit: PropTypes.func,
  idleInterval: PropTypes.number,
  setIdleInterval: PropTypes.func,
  setIdleTickTimer: PropTypes.func,
  loggedUsers: PropTypes.func,
  loggedOut: PropTypes.func,
  received: PropTypes.array,
};
export default connect(
  state => state,
  actions
)(Display);
