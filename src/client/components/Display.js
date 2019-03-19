import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const Display = props => <div className="display">
  {
    props.received.map(meta => {
      meta.msg = meta.msg.replace('\n', '');
      meta.msg = meta.msg.trim();

      console.log('meta:', meta);
      const firstAndLastName = meta.msg.split(/:/ig)[0];

      const msg = meta.msg.match(/:([^)]+)\(/)[1];
      const dateAndTimeInfo = meta.msg.match(/\(([^)]+)\)/)[1];
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
