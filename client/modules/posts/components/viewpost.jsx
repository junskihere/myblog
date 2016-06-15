import React from 'react';
import ReactQuill from 'react-quill';
import OpenGraphTags from './open_graph_tags.jsx';

class Viewpost extends React.Component {
  render() {
    const {post} = this.props;
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
                  <ReactQuill    className="justify"
                                      readOnly={true}
                                      value={post.body}
                      />
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

          {/** <div className="row center">
            <div className="col s12 m6">
              <h1>Ads here</h1>
            </div>
            <div className="col s12 m6">
              <h1>Ads here</h1>
            </div>

          </div>
          */ }

      </div>
      </div>
    );
  }
}

export default Viewpost;
