import React from 'react';
import ReactQuill from 'react-quill';
import {DocHead} from 'meteor/kadira:dochead';


class Viewpost extends React.Component {


  componentDidUpdate(){
    (adsbygoogle = window.adsbygoogle || []).push({});

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


  }


  render() {
    const {post, Meteor, FlowRouter, waitingForSubscriptions, loadingpage} = this.props;
    if(waitingForSubscriptions === "goo"){
      return (
        <div className="container" style={{"marginTop":"20%"}}>
             <div className="row ">
               {loadingpage()}
            </div>
       </div>
     );
    }else {
      return (
        <div>
          <div id="fb-root"></div>
        <div className="container " style={{"marginTop":"5%"}}>
            <div className="row center">
            {
              post ?
              <div className="col s12">


                  <div className="col s9">
                    <h1>{post.title}</h1>
                  </div>



                  <div className="col s9  center animated fadeInDown">
                    <img className="responsive-img" src={post.images.secure_url.replace("upload/","upload/w_600,h_400,c_fill/")} alt="Contact Person" />
                      <div className="fb-like" data-href={Meteor.absoluteUrl().slice(0,-1)+FlowRouter.current().path} 	data-layout="standard" data-action="like" data-show-faces="false"></div>
                      <div className="fb-share-button" data-href={Meteor.absoluteUrl().slice(0,-1)+FlowRouter.current().path} data-layout="button_count" data-size="small" data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>
                  </div>

                  <div className="col s3">
                    <ins class="adsbygoogle" style={{display:block}} data-ad-client="ca-pub-3428123242724073"  data-ad-slot="9640967148" data-ad-format="auto"></ins>
                  </div>

                  <div className="col s9 animated fadeInUp">
                    <ReactQuill className="justify" readOnly={true} value={post.body}  />

                  </div>

                  <div className="col s3">
                      <ins class="adsbygoogle" style={{display:block}} data-ad-client="ca-pub-3428123242724073"  data-ad-slot="9640967148" data-ad-format="auto"></ins>
                  </div>

              </div>


              :

              <div className="row center">
                <h1>Post not found</h1>
              </div>
            }
            </div>


        </div>
        </div>
      );
    }



  }
}

export default Viewpost;
