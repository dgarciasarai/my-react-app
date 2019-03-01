import React from 'react';

function Image(props) {
  return <img src={props.src} className={props.class} alt={props.alt} />
}

export default Image