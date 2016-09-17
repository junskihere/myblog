import React from 'react';


class SingleImageLayout extends React.Component {

  render() {
    const {content} = this.props;
    return (
      <div style={{marginTop:"30px"}}>
          {content()}
      </div>
    );
  }
}


export default SingleImageLayout;
