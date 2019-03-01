import React from 'react';

class SuperMessage extends React.Component {
  render(props) {
    return <h1>{this.props.text}</h1>
  }
}

export default SuperMessage