import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/containers/main_layout.js';
import SingleImageLayout from './components/single_image_layout.jsx';

import Posts from './containers/posts.js';
import AddPost from './containers/addpost.js';
import ViewPost from './containers/viewpost.js';
import LoadingPage from '../core/components/loading_page.jsx';
import Auth from '/client/modules/auth/containers/auth.js';


export default function (injectDeps, {FlowRouter}) {
const AuthCheck = injectDeps(Auth);
const MainLayoutCtx = injectDeps(MainLayout);
const SingleImageLayoutCtx = injectDeps(SingleImageLayout);


  FlowRouter.route('/posts', {
    name: 'posts',
    action() {
      mount( SingleImageLayoutCtx,{
         content: () => (<Posts  loadingpage={LoadingPage}/>),
      });
    },
  });

  FlowRouter.route('/addpost', {
    name: 'addposts',
    action() {
      mount(AuthCheck, {
        MainLayout, content: () => (<AddPost />),
      });
    },
  });

  FlowRouter.route('/viewpost/:postId', {
    name: 'viewpost',
    action({postId}) {
      mount(SingleImageLayoutCtx, {
         content: () => (<ViewPost postId={postId} />),
      });
    },
  });

  FlowRouter.route('/editporst', {
    name: 'editposts',
    action() {
      mount(AuthCheck, {
        MainLayout, content: () => (<AddPost />),
      });
    },
  });

  FlowRouter.route('/removepost', {
    name: 'removeposts',
    action() {
      mount(AuthCheck, {
      MainLayout,  content: () => (<AddPost />),
      });
    },
  });

  FlowRouter.route('/browse', {
    name: 'browse',
    action() {
      mount(BrowsePosts);
    },
  });

}
