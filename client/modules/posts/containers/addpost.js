import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import AddPost from '../components/addpost.jsx';

export const composer = ({context,clearErrors,loadingpage}, onData) => {
  const {LocalState} = context();
  const error = {
      title :     LocalState.get('title'),
      body :    LocalState.get('body'),
  };
  let loader = LocalState.get("loading",false);
  onData(null, {error, loader ,loadingpage, LocalState});

  return clearErrors;

};

export const depsMapper = (context, actions) => ({
  create:actions.posts.createPost,
  clearErrors:actions.posts.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddPost);
