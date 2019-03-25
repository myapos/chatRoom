import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from '../store/actions';

const WhoIsTyping = props => (<div className="whoIsTyping"> {
  props.who !== '' && `${props.firstname} ${props.lastname}` !== props.who
    ? `${props.who} is typing` : ''
} </div>);

WhoIsTyping.propTypes = {
  who: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
};
export default connect(state => state, actions)(WhoIsTyping);

