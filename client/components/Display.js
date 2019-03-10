import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const Display = (props) => <div className="display">
  {props.received}
</div>

export default connect(state => state, actions)(Display);