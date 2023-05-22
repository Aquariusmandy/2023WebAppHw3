import React from 'react';

class Center extends React.Component {
  render() {
    return (
      <div style={{flex:1, 
        paddingRight:"35%",
        paddingLeft:"35%", 
        justifyContent:'center'}}>
        {this.props.children}
      </div>
    )
  }
}

export default Center;