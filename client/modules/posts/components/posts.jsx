import React from 'react';




class Posts extends React.Component{
  componentDidMount(){
//
//     <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
// <!-- LeaderBoard-1 -->
// <ins class="adsbygoogle"
//      style="display:inline-block;width:728px;height:90px"
//      data-ad-client="ca-pub-3428123242724073"
//      data-ad-slot="8164233941"></ins>
// <script>
// (adsbygoogle = window.adsbygoogle || []).push({});
// </script>
// <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
// <!-- side Ads -->
// <ins class="adsbygoogle"
//      style="display:block"
//      data-ad-client="ca-pub-3428123242724073"
//      data-ad-slot="9640967148"
//      data-ad-format="auto"></ins>
// <script>
// (adsbygoogle = window.adsbygoogle || []).push({});
// </script>
  }


  render() {
    const {posts,loadingpage,waitingForSubscriptions} = this.props;
       if(waitingForSubscriptions){
               return(
                 <div className="container" style={{"marginTop":"40%"}}>
                        <div className="row">
                          {loadingpage()}
                       </div>
                  </div>
               );
       }

    return(

        <div className="container">
          <ins className="adsbygoogle"  style={{"display":"inline-block"},{"width":"728px"},{"height":"90px"}} data-ad-client="ca-pub-3428123242724073" data-ad-slot="8164233941"></ins>
          <div className="row center">
            <h1>ads napod diri</h1>
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

  componentDidUpdate(){
    // $('.collapsible').collapsible({
    //   accordion : true ,// A setting that changes the collapsible behavior to expandable instead of the default accordion style
    // });
  }

  viewPost(postId, e){
    if(e && e.preventDefault){
      e.preventDefault();
    }
    const {Meteor} = this.props;

    window.open(Meteor.absoluteUrl() + "posts/viewpost/" + postId, '_blank');
  }

}



export default Posts;
