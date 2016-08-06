import React from 'react';


class Home extends React.Component {
  componentDidMount(){
     $('.parallax').parallax();
  }
  render() {
    return (
      <div>
      <div className="parallax-container" style={{height:"150px"}}>
        <div className="parallax"><img src="/img/cloud-home.jpg" /></div>

      </div>
      <div className="section white">
        <div className="row container">
          <h2 className="header">JunskiHere</h2>
          <p className="grey-text text-darken-3 lighten-3">Welcome to junskihere. This site was made just for you.<a href="/posts">start browsing.</a> .</p>
        </div>
      </div>
        <div className="parallax-container"  style={{"minHeight":"900px","height":"100vh"}}>
          <div className="parallax"><img src="/img/bg_6.jpg" / ></div>
        </div>
        </div>
    );
  }
}

export default Home;
