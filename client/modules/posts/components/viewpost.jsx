import React from 'react';

class Viewpost extends React.Component {
  render() {
    const {post} = this.props;
    return (
      <div className="container " style={{"margin-top":"10%"}}>
          <div className="row center ">
          {
            post ?
            <div>
                <div className="col s12">
                  <h1>{post.title}</h1>
                </div>

                <div className="col s12">
                  <p >{post.body}</p>
                    <div className="chip ">
                        <img src="http://materializecss.com/images/yuna.jpg" alt="Contact Person" />
                       Jane Doe
                    </div>
                </div>

            </div>


            :

            <div className="row center">
              <h1>Post not found</h1>
            </div>
          }
          </div>
          <div className="row center">
            <div className="col s12 m6">
              <h1>Adds here</h1>
            </div>
            <div className="col s12 m6">
              <h1>Adds here</h1>
            </div>

          </div>


      </div>
    );
  }
}

export default Viewpost;
