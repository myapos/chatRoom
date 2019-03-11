import React, { useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const handleEnter = (props, inputUserName, inputLastName) => {
  // get firstname and lastname and keeped them in 
  // state

  props.enter(inputUserName.current.value, inputLastName.current.value)

}

const Enter = (props) => {
  const inputUserName = useRef(null);
  const inputLastName = useRef(null);

  return (<div className="enter">
    <div className="inputs">
      <input
        ref={inputUserName}
        type="text"
        placeholder="name"
        className="holder"
      />
      <input
        ref={inputLastName}
        type="text"
        placeholder="lastname"
        className="holder"
      />
    </div>
    <div
      className="myBtn clearFloat"
      onClick={() => handleEnter(props, inputUserName, inputLastName)}>
      Enter
    </div>
  </div>)
}

export default connect(state => state, actions)(Enter);