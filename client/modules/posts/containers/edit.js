import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Posts from '/lib/collections/posts.js';
import Edit from '../components/edit.jsx';

export const composer = ({context , postId}, onData) => {
  const {Meteor} = context();
  if(Meteor.subscribe("post.edit",postId).ready()){
    const posts = Posts.findOne({_id:postId});
    onData(null, {posts});
  }

};

export const depsMapper = (context, actions) => ({
  context: () => context,
  updatePost:actions.posts.updatePost,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Edit);
