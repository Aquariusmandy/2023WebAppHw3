import React from 'react';

class TextColor extends React.Component {
  render() {
    return (
      <div style={{color: '#E07D54'}}>
        {this.props.children}
      </div>
    )
  }
}

export default TextColor;