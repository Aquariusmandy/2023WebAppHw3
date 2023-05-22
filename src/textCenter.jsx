import React from 'react';

class TextCenter extends React.Component {
  render() {
    return (
      <div style={{ textAlign:'center'}}>
        {this.props.children}
      </div>
    )
  }
}

export default TextCenter;