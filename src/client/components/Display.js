import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const Display = props => <div className="display">
  {
    props.received.map(meta => {
      meta.msg = meta.msg.replace('\n', '');
      meta.msg = meta.msg.trim();

      console.log('meta:', meta);
      const firstAndLastName = meta.msg.split(/ /ig)[0] + ' ' + meta.msg.split(/ /ig)[1];
      const dateAndTimeInfo = meta.msg.match(/\(\d+\/\d+\/\d+\s\d+:\d+:\d+\)/)[0];

      const msgAndUserAr = meta.msg.split(/\(\d+\/\d+\/\d+\s\d+:\d+:\d+\)/)[0];
      const msg = msgAndUserAr.split(/\s/).slice(2).join(' ');
      console.log('dateAndTimeInfo:', dateAndTimeInfo);

      return (<div className="row" key={meta.timestamp}>
        <div className="whoIsIt">
          {firstAndLastName}:
        </div>
        {msg}
        <div className="dateAndTimeInfo">
          {dateAndTimeInfo}
        </div>
      </div>);
    })
  }
</div>;

export default connect(state => state, actions)(Display);
