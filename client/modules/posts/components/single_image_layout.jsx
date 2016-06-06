import React from 'react';


class SingleImageLayout extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div>
        {content()}
      </div>
    );
  }
}


export default SingleImageLayout;
