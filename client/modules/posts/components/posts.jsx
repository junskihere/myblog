import React from 'react';




class Posts extends React.Component{
  componentDidMount(){
    //(adsbygoogle = window.adsbygoogle || []).push({});
  }


  componentDidUpdate(){
    (adsbygoogle = window.adsbygoogle || []).push({});
  }


  render() {
    const {posts,loadingpage,waitingForSubscriptions} = this.props;
       if(waitingForSubscriptions){
               return(
                 <div className="container" style={{"marginTop":"25%"}}>
                        <div className="row">
                          {loadingpage()}
                       </div>
                  </div>
               );
       }

    return(

        <div className="container" style={{"marginTop":"5%"}}>

          <div className="row center">
            <ins className="adsbygoogle" style={{"display":"block"}} data-ad-client="ca-pub-3428123242724073"  data-ad-slot="9640967148" data-ad-format="auto"></ins>
          </div>

          <div className="row  ">
            <ul>
              {
                posts.map( post  => (
                  <li className="col s12 m3 animated pulse"  key={post._id} >
                    <div className="card small">
                      <div className="card-image waves-effect waves-block waves-light ">
                        <img className="activator" src={post.images.secure_url.replace("upload/","upload/w_300,h_200,c_fill/")} />
                      </div>
                      <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{post.title}<i className="material-icons right">more_vert</i></span>
                        <p><a href="#"  onClick={this.viewPost.bind(this, post.slug)}>Read More</a></p>
                      </div>
                      <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{post.title}<i className="material-icons right">close</i></span>
                        <p>{post.description}</p>
                        <p><a href="#"  onClick={this.viewPost.bind(this, post.slug)}>Read More</a></p>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>





    </div>

    );
  }



  viewPost(postId, e){
    if(e && e.preventDefault){
      e.preventDefault();
    }
    const {Meteor} = this.props;

    window.open(Meteor.absoluteUrl() + "viewpost/" + postId, '_blank');
  }

}



export default Posts;
