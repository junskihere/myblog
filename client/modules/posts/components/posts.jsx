import React from 'react';

import AddPostButton from './addpostbutton.jsx';



class Posts extends React.Component{

  render() {
    const {posts,loadingpage} = this.props;
    const { waitingForSubscriptions } = this.props;
       if(waitingForSubscriptions){
               return(
                 <div className="container">
                        <div className="row ">
                          {loadingpage()}
                       </div>
                  </div>
               );
       }

    return(
      <div className="container">
      <div className="row  ">
              <PostLists posts={posts} />
        </div>
            <AddPostButton />
      </div>
    );
  }

  // componentDidUpdate(){
  //   $('.collapsible').collapsible({
  //     accordion : true ,// A setting that changes the collapsible behavior to expandable instead of the default accordion style
  //   });
  // }
}


 const PostLists  = ({posts}) => (

  // <ul className="collapsible collection  popout" data-collapsible="accordion">
  //       {posts.map( post  => (
  //       <li className="collection-item avatar  blue darken-3" key={post._id}>
  //        <img src="https://materiell.com/wp-content/uploads/2015/03/john-small.png" alt="" className="circle " />
  //         <div className="collapsible-header  blue darken-3"><h5>{post.title}</h5></div>
  //         <div className="collapsible-body "><p className="truncate">{post.body}<br /><br /><br /><a  className="right" href={"/viewpost/"+post._id}>view</a></p></div>
  //       </li>
  //       ))
  //   }
  // </ul>
  <ul >
        {posts.map( post  => (
        // <li className="collection-item avatar  blue darken-3" key={post._id}>
        //  <img src="https://materiell.com/wp-content/uploads/2015/03/john-small.png" alt="" className="circle " />
        //   <div className="collapsible-header  blue darken-3"><h5>{post.title}</h5></div>
        //   <div className="collapsible-body "><p className="truncate">{post.body}<br /><br /><br /><a  className="right" href={"/viewpost/"+post._id}>view</a></p></div>
        // </li>


        <li className="col s12 m3"  key={post._id} >
          <div className="card small">
            <div className="card-image waves-effect waves-block waves-light ">
              <img className="activator" src="https://materiell.com/wp-content/uploads/2015/03/john-small.png" />
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
        </div>
        </li>


        ))
    }
  </ul>
);



export default Posts;
