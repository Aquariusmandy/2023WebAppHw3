import React from 'react';

class TextColorGray extends React.Component {
  render() {
    return (
      <div style={{color: '#AC9C8D'}}>
        {this.props.children}
      </div>
    )
  }
}

export default TextColorGray;