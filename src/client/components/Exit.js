import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

class Exit extends Component {
  handleExit () {
    // trigger exit action
    // this will set entered value to false

    this.props.exit();
  }

  render () {
    return (
      <div>
        <i className="fas fa-sign-out-alt exit" onClick={() => this.handleExit()} />
      </div>
    );
  }
}

Exit.propTypes = {
  exit: PropTypes.func,
};

export default connect(state => state, actions)(Exit);
