import {Meteor} from 'meteor/meteor';
import cloudinary from "cloudinary";
import Datauri from "datauri";
import Post from '/lib/collections/posts.js';
import {check} from 'meteor/check';


export default function () {
  Meteor.methods({
    'createPost'(post) {
      check(post,Object);
      return new Promise((resolve)=>{
        uploadImage(post.images).then(result=> {
          console.log(result);

          // const post = new Post();
          // post.title = image.title;
          // post.body = image.body;
          // post.user_id = Meteor.uuid();
          // post.images  = result;
          // post.createdAt = new Date();
          // post.save((err)=>{
          //   if(err){
          //     const errors = err.details[0];
          //     throw new Error(errors.message);
          //   }
          //  resolve("Created Transaction");
        //  });
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
    var imagesUrl = [];
    var dUri = new Datauri();
    for(var i = 0;i<= images.length;i++){
      let raw = new Buffer(images[i]);
      dUri.format('.png', raw);
      cloudinary.uploader.upload(dUri.content,(result)=> {
        if(i >= images.length ){
          resolve(imagesUrl);
        }
        imagesUrl.push(result);
      });
    }
  });
}
