import React from 'react';

export default function(props) {
  return (
    <button
      {...props}
      className="btn"
    >
      {props.desc}
    </button>
  )
}