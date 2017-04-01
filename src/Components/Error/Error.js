import React from 'react';

import './Error.css';

const Error = (props) => {
  return (
    <p className="Error">{props.error}</p>
  )
}

export default Error;
