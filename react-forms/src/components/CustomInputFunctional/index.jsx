import React from 'react';

function CustomInput(props) {
  return (
    <div>
      <span>{props.value}</span>
      <button onClick={props.onChange}>Increment</button>
    </div>
  );
}

export default CustomInput;
