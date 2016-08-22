import React from 'react';
import ReactQuill from 'react-quill';
import OpenGraphTags from './open_graph_tags.jsx';

class Viewpost extends React.Component {
  componentDidMount(){

    <div id="fb-root"></div>
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7&appId=1704761049784713";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

  }


  render() {
    const {post, Meteor, FlowRouter} = this.props;
    return (
      <div>
        <OpenGraphTags post={post} />
      <div className="container " style={{"marginTop":"10%"}}>
          <div className="row center">
          {
            post ?
            <div>


                <div className="col s9">
                  <h1>{post.title}</h1>
                </div>



                <div className="col s9  center">
                  <img src={post.images.secure_url.replace("upload/","upload/w_600,h_400,c_fill/")} alt="Contact Person" />
                </div>

                <div className="col s3">
                  <h1>ads here</h1>
                </div>

                <div className="col s9">
                  <ReactQuill className="justify" readOnly={true} value={post.body}  />
                    <div className="fb-like" data-href={Meteor.absoluteUrl().slice(0,-1)+FlowRouter.current().path} 	data-layout="standard" data-action="like" data-show-faces="true"></div>
                  <div className="fb-share-button" data-href={Meteor.absoluteUrl().slice(0,-1)+FlowRouter.current().path} data-layout="button_count" data-size="small" data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>
                    <div className="chip ">
                        <img src="http://materializecss.com/images/yuna.jpg" alt="Contact Person" />
                       Jane Doe
                    </div>
                </div>

                <div className="col s3">
                  <h1>ads here</h1>
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

export default Viewpost;
