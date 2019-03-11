import React from 'react';

const handleEnter = () => {
  debugger;
}

const Enter = () => {
  return (<div className="enter">
    <div className="inputs">
      <input
        type="text"
        placeholder="name"
        className="holder"
      />
      <input
        type="text"
        placeholder="lastname"
        className="holder"
      />
    </div>
    <div
      className="myBtn clearFloat"
      onClick={() => handleEnter()}>
      Enter
    </div>
  </div>)
}

export default Enter;