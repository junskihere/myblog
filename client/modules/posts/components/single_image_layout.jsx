import React from 'react';
import NavBar from '../../core/components/Navbar/top.jsx';

class SingleImageLayout extends React.Component {
  componentDidMount(){
     $('.parallax').parallax();
       (adsbygoogle = window.adsbygoogle || []).push({});
  }
  componentDidUpdate(){


    // const {post} = this.props;
    //   if(post){
    //     window.fbAsyncInit = function() {
    //       FB.init({
    //         appId      : '1704761049784713',
    //         xfbml      : true,
    //         version    : 'v2.7'
    //       });
    //     };
    //     (function(d, s, id){
    //       var js, fjs = d.getElementsByTagName(s)[0];
    //       if (d.getElementById(id)) {return;}
    //       js = d.createElement(s); js.id = id;
    //       js.src = "//connect.facebook.net/en_US/sdk.js";
    //       fjs.parentNode.insertBefore(js, fjs);
    //     }(document, 'script', 'facebook-jssdk'));
    //   }


    (adsbygoogle = window.adsbygoogle || []).push({});

  }
  render() {
    const {content} = this.props;
    return (
      <div >
        <NavBar Meteor={Meteor} />

          <div className="parallax-container" style={{height:"150px"}}>
            <div className="parallax esponsive-img" ><img src="/img/cloud-home.jpg" /></div>

          </div>
          <div className="section white">
            <div className="row container">
                {content()}
            </div>
          </div>

            <div className="parallax-container"  style={{"minHeight":"900px","height":"100vh"}}>
                <div className="section pink lighten-5">
              <div className="row container">
                <ins className="adsbygoogle" style={{"display":"block"}} data-ad-client="ca-pub-3428123242724073"  data-ad-slot="9640967148" data-ad-format="auto"></ins>
              </div>
              </div>
              <div className="parallax"><img src="/img/bg_6.jpg" / ></div>
            </div>

      </div>
    );
  }
}


export default SingleImageLayout;
