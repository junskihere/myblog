import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Post from '/lib/collections/posts.js';
import Posts from '../components/posts.jsx';



export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  // if(Meteor.subscribe('posts').ready()) {
  //   const posts = Post.find();
  //   onData(null,{posts});
  // } else {
  //
  //     const waitingForSubscriptions = true;
  //     const data = {
  //       waitingForSubscriptions,
  //     };
  //     onData(null, data);
  //   }
   const waitingForSubscriptions = true;
    onData(null, {waitingForSubscriptions});
  Meteor.call("getLatestPosts",(err,posts)=>{
    if(err){
        console.log(err);
    }
    onData(null,{posts,Meteor});
  });


};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Posts);
