import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import Posts from '/lib/collections/posts.js';


import Viewpost from '../components/viewpost.jsx';

export const composer = ({context , slug}, onData) => {
  const {Meteor, FlowRouter} = context();
  let post= null;
  if(Meteor.subscribe("post.view",slug).ready()){
     post = Posts.findOne({slug:slug});
    onData(null, {post, Meteor, FlowRouter});
  }else {
    const waitingForSubscriptions = true;
     onData(null, {waitingForSubscriptions});
  }

};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Viewpost);
