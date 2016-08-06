import { Class } from 'meteor/jagi:astronomy';
import {Mongo} from 'meteor/mongo';

export const Posts = new Mongo.Collection("posts");

const PostSchema = Class.create({
    name : "PostSchema",
    collection : Posts,
    fields : {
      title :{
          type : String,
          validators: [{
              type: 'minLength',
              param: 10,
              message: 'The title is too short! (min of 10 characters)',
          }],
      } ,
      user_id : String,
      body : {
          type : String,
          validators: [{
              type: 'minLength',
              param: 100,
              message: 'The body is too short! (min of 100 characters)',
          }],
      } ,
      description : {
          type : String,
          validators: [{
              type: 'minLength',
              param: 20,
              message: 'The description is too short! (min of 20 characters)',
          }],
      } ,
      type: String,
      images : Object,
      createdAt : Date,
    },
});

export default PostSchema;
