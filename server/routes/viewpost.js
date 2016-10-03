import {Posts} from '/lib/collections/posts.js'
import {Meteor} from 'meteor/meteor';


Meteor.startup(function () {
  Posts._ensureIndex({ "slug": 1});
});


var css = '<style type="text/css">#outPopUp{position:absolute;width:300px;height:200px;z-index:15;top:50%;left:50%;margin:-100px 0 0 -150px}#cssload-contain{width:146px;height:49px;position:absolute;top:0;right:0;left:0;bottom:0;margin:auto;opacity:0;animation:fadeIn 1.15s 1;-o-animation:fadeIn 1.15s 1;-ms-animation:fadeIn 1.15s 1;-webkit-animation:fadeIn 1.15s 1;-moz-animation:fadeIn 1.15s 1;animation-fill-mode:forwards;-o-animation-fill-mode:forwards;-ms-animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards}.cssload-wrap{animation:translate 1.15s infinite ease-in-out alternate,zindex 2.3s infinite ease-in-out;-o-animation:translate 1.15s infinite ease-in-out alternate,zindex 2.3s infinite ease-in-out;-ms-animation:translate 1.15s infinite ease-in-out alternate,zindex 2.3s infinite ease-in-out;-webkit-animation:translate 1.15s infinite ease-in-out alternate,zindex 2.3s infinite ease-in-out;-moz-animation:translate 1.15s infinite ease-in-out alternate,zindex 2.3s infinite ease-in-out;position:absolute}.cssload-ball{width:49px;height:49px;box-shadow:0 -6.25px 0 rgba(0,0,0,.15) inset;background-color:#e3746b;border-radius:50%;animation:scale 1.15s infinite ease-in-out alternate;-o-animation:scale 1.15s infinite ease-in-out alternate;-ms-animation:scale 1.15s infinite ease-in-out alternate;-webkit-animation:scale 1.15s infinite ease-in-out alternate;-moz-animation:scale 1.15s infinite ease-in-out alternate;animation-delay:-575ms;-o-animation-delay:-575ms;-ms-animation-delay:-575ms;-webkit-animation-delay:-575ms;-moz-animation-delay:-575ms;transform:scale(.5);-o-transform:scale(.5);-ms-transform:scale(.5);-webkit-transform:scale(.5);-moz-transform:scale(.5);border:2px solid #000}.cssload-ball:after{content:"";width:49px;height:13px;background:#eee;position:absolute;top:68px;border-radius:50%}#cssload-wrap2{animation-delay:-1.15s;-o-animation-delay:-1.15s;-ms-animation-delay:-1.15s;-webkit-animation-delay:-1.15s;-moz-animation-delay:-1.15s}#cssload-ball2{background-color:#397bf9;animation-delay:-1725ms;-o-animation-delay:-1725ms;-ms-animation-delay:-1725ms;-webkit-animation-delay:-1725ms;-moz-animation-delay:-1725ms}#cssload-wrap3{animation-delay:-1725ms;-o-animation-delay:-1725ms;-ms-animation-delay:-1725ms;-webkit-animation-delay:-1725ms;-moz-animation-delay:-1725ms}#cssload-ball3{background-color:#f4b400;animation-delay:-2.3s}#cssload-wrap4{animation-delay:-2875ms;-o-animation-delay:-2875ms;-ms-animation-delay:-2875ms;-webkit-animation-delay:-2875ms;-moz-animation-delay:-2875ms}#cssload-ball4{background-color:#0f9d58;animation-delay:-3.45s;-o-animation-delay:-3.45s;-ms-animation-delay:-3.45s;-webkit-animation-delay:-3.45s;-moz-animation-delay:-3.45s}@keyframes translate{100%{transform:translateX(97px)}}@-o-keyframes translate{100%{-o-transform:translateX(97px)}}@-ms-keyframes translate{100%{-ms-transform:translateX(97px)}}@-webkit-keyframes translate{100%{-webkit-transform:translateX(97px)}}@-moz-keyframes translate{100%{-moz-transform:translateX(97px)}}@keyframes scale{100%{transform:scale(1)}}@-o-keyframes scale{100%{-o-transform:scale(1)}}@-ms-keyframes scale{100%{-ms-transform:scale(1)}}@-webkit-keyframes scale{100%{-webkit-transform:scale(1)}}@-moz-keyframes scale{100%{-moz-transform:scale(1)}}@keyframes zindex{25%{z-index:1}75%{z-index:-1}}@-o-keyframes zindex{25%{z-index:1}75%{z-index:-1}}@-ms-keyframes zindex{25%{z-index:1}75%{z-index:-1}}@-webkit-keyframes zindex{25%{z-index:1}75%{z-index:-1}}@-moz-keyframes zindex{25%{z-index:1}75%{z-index:-1}}@keyframes fadeIn{100%{opacity:1}}@-o-keyframes fadeIn{100%{opacity:1}}@-ms-keyframes fadeIn{100%{opacity:1}}@-webkit-keyframes fadeIn{100%{opacity:1}}@-moz-keyframes fadeIn{100%{opacity:1}}</style>';

var specialDiv = '<div id="inject-loader-wrapper"><div id="outPopUp"><div id="cssload-contain" ><div class="cssload-wrap" id="cssload-wrap1"><div class="cssload-ball" id="cssload-ball1"></div></div><div class="cssload-wrap" id="cssload-wrap2"><div class="cssload-ball" id="cssload-ball2"></div></div><div class="cssload-wrap" id="cssload-wrap3"><div class="cssload-ball" id="cssload-ball3"></div></div><div class="cssload-wrap" id="cssload-wrap4"><div class="cssload-ball" id="cssload-ball4"></div></div></div></div></div>';


WebApp.connectHandlers.use("/posts", function(req, res, next) {
var google = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
  try {
      req.dynamicHead = (req.dynamicHead || "") + css + google  + specialDiv;
    next();
  } catch (e) {
    next();
  }
});


WebApp.connectHandlers.use("/viewpost/", function(req, res, next) {
var google = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
  try {
    const post_id = req.url.replace("/","");

    if(post_id){

      const post = Posts.findOne({slug:post_id});

      const url = '<meta property="fb:app_id" content="1704761049784713" />';
      const appid = '<meta property="og:url" content="http://junskihere.com' + req.originalUrl  +'" />';
      const title = '<meta property="og:title" content="'+ post.title +'" /> ';
      const description =  '<meta property="og:description" content="'+post.description+'" />';
      const type = '<meta property="og:type" content="'+post.type +'" /> ';
      const image =  '<meta property="og:image" content="'+post.images.secure_url+'" /> ';

      req.dynamicHead = (req.dynamicHead || "") + css + appid + url + google + title + description + type + image + specialDiv;
    }
    next();
  } catch (e) {

    next();
  }
});
