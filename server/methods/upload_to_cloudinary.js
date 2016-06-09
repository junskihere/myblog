import {Meteor} from 'meteor/meteor';
import cloudinary from "cloudinary";
import Datauri from "datauri";
import Post from '/lib/collections/posts.js';
import {check} from 'meteor/check';


export default function () {
  Meteor.methods({
    'createPost'(formData) {
      check(formData,Object);
      return new Promise((resolve)=>{
        uploadImage(formData.images).then(result=> {
          const post = new Post();
          post.title = formData.title;
          post.body = formData.body;
          post.user_id = Meteor.userId();
          post.images  = result;
          post.createdAt = new Date();
          post.save((err)=>{
            if(err){
              const errors = err.details[0];
              throw new Error(errors.message);
            }
            console.log("hello");

           resolve("Created Transaction");
         });
        });
        });
    },
  });
}


const  uploadImage  = (images)=>{
  return new Promise ((resolve) => {
    cloudinary.config ({
            cloud_name: 'dnebqjbyh',
            api_key: '264784665157316',
            api_secret: 'DBgUmUAaTYoZ27AokZJ1Gs_QY0c' ,
    });
      var dUri = new Datauri();
      let raw = new Buffer(images);
      dUri.format('.png', raw);
      cloudinary.uploader.upload(dUri.content,(result)=> {
        resolve(result);
      });

  });
}
