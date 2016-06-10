import React from 'react';


class SingleImageLayout extends React.Component {
  componentDidMount(){
      $('.parallax').parallax();
  }

  render() {
    const {content} = this.props;
    return (
      <div >
          <div className="parallax-container">
              <h1>Hello</h1>
              <div className="parallax"><img src="img/cloud-home.jpg" /></div>
          </div>

          {content()}
      </div>
    );
  }
}


export default SingleImageLayout;
