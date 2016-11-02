import React from 'react';
import ReactQuill from 'react-quill';
import {DocHead} from 'meteor/kadira:dochead';


class Viewpost extends React.Component {
  componentDidMount(){
    (adsbygoogle = window.adsbygoogle || []).push({});
  }

  componentDidUpdate(){


    const {post} = this.props;
      if(post){
        window.fbAsyncInit = function() {
          FB.init({
            appId      : '1704761049784713',
            xfbml      : true,
            version    : 'v2.7'
          });
        };
        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      }


    (adsbygoogle = window.adsbygoogle || []).push({});

  }


  render() {
    const {post, Meteor, FlowRouter, waitingForSubscriptions, loadingpage} = this.props;

      return (
        <div>
          <div id="fb-root"></div>
        <div className="container " style={{"marginTop":"5%"}}>
            <ins className="adsbygoogle" style={{"display":"block"}} data-ad-client="ca-pub-3428123242724073"  data-ad-slot="9640967148" data-ad-format="auto"></ins>

          <div className="row center">
            {
              post ?
              <div className="col s12">


                  <div className="col s12">
                    <h2 className="responsive">{post.title}</h2>
                  </div>



                  <div className="col s12  center animated fadeInDown">
                    <img className="responsive-img" src={post.images.secure_url} alt="Contact Person" />

                    <div className="fb-like" data-href={"http://junskihere.com"+FlowRouter.current().path}  data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>

                  </div>

                  <div className="col s12 center">
                    <ins className="adsbygoogle" style={{"display":"block"}} data-ad-client="ca-pub-3428123242724073"  data-ad-slot="5438949948" data-ad-format="auto"></ins>
                  </div>

                  <div className="col s12 animated fadeInUp">
                    <ReactQuill className="justify" readOnly={true} value={post.body}  />

                  </div>
                  <div className="col s12  center animated fadeInDown">
                      <div className="fb-like" data-href={"http://junskihere.com"+FlowRouter.current().path}  data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
                  </div>
                <div className="col s12 center">
                      <ins className="adsbygoogle" style={{"display":"block"}} data-ad-client="ca-pub-3428123242724073" data-ad-slot="5438949948" data-ad-format="auto"></ins>
                  </div>
                  <input type="hidden" value={post._id} />
              </div>


              :

              <div className="row center">
                <ins className="adsbygoogle" style={{"display":"block"}} data-ad-client="ca-pub-3428123242724073"  data-ad-slot="9640967148" data-ad-format="auto"></ins>
              </div>
            }
            </div>


        </div>
        </div>
      );

  }
}

export default Viewpost;
