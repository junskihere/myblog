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
              <div className="row">
                  <div className="col s12">
                      <div className="col s4 green accent-4">
                        <h1>Hello</h1>
                      </div>
                      <div className="col s4 red accent-4">
                        <h1>Hello1</h1>
                      </div>
                      <div className="col s4 yellow accent-4">
                        <h1>Hello2</h1>
                      </div>
                  </div>
                </div>
              <div className="parallax"><img src="img/cloud-home.jpg" /></div>
          </div>

          {content()}
          
      </div>
    );
  }
}


export default SingleImageLayout;
