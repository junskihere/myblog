import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';

const authCommon = function () {

  let userSubReady = Meteor.subscribe('users.current').ready();

  const userId = Meteor.userId() || null;
  const user = Meteor.user();

  return {
    userSubReady,
    userId,
    user,
  };

};

const facebookApi = function() {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1704761049784713',
      xfbml      : true,
      version    : 'v2.7'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
};




export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
    authCommon,
  };
}
