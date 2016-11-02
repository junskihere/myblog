import {Posts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';


export default function () {
  Meteor.methods({
    'getLatestPosts'() {
      return Posts.find({},{sort:{createdAt:-1}}).fetch();
    },
    'junskihere-delete'(id){
      if(Meteor.userId()){
        Posts.remove(id);
      }
    }
  });
}
