import {Posts} from '/lib/collections/posts.js'
import {Meteor} from 'meteor/meteor';
WebApp.connectHandlers.use("/posts/viewpost/", function(req, res, next) {

  try {
    const post_id = req.url.replace("/","");
    if(post_id){
      const post = Posts.findOne({_id:post_id});

      const url = '<meta property="og:url" content="'+ Meteor.absoluteUrl().slice(0,-1) + req.originalUrl  +'" />';
      const title = '<meta property="og:title" content="'+ post.title +'" /> ';
      const description =  '<meta property="og:description" content="'+post.description+'" />';
      const type = '<meta property="og:type" content="'+post.article +'" /> ';
      const image =  '<meta property="og:image" content="'+post.images.secure_url+'" /> ';

      req.dynamicHead = (req.dynamicHead || "") + url + title + description + type + image;
    }
    next();
  } catch (e) {
    next();
  }
});
