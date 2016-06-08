import {Meteor} from 'meteor/meteor';
import cloudinary from "cloudinary";
import Datauri from "datauri";
import Post from '/lib/collections/posts.js';
import {check} from 'meteor/check';


export default function () {
  Meteor.methods({
    'creaetPost'(image) {
      check(image,Object);
      return new Promise((resolve)=>{
        uploadImage(image.image).then(result=> {
          const post = new Post();
          post.title = image.title;
          post.body = image.body;
          post.user_id = Meteor.uuid();
          post.images  = result;
          post.createdAt = new Date();
          post.save((err)=>{
            if(err){
              const errors = err.details[0];
              throw new Error(errors.message);
            }
            resolve("Created Transaction");
          });
        });


        });
    },
  });
}


const  uploadImage  = (image)=>{
  return new Promise ((resolve) => {
    let raw = new Buffer(image);
    cloudinary.config ({
            cloud_name: 'dnebqjbyh',
            api_key: '264784665157316',
            api_secret: 'DBgUmUAaTYoZ27AokZJ1Gs_QY0c' ,
    });

    var dUri = new Datauri();
    dUri.format('.png', raw);
    cloudinary.uploader.upload(dUri.content,(result)=> {
          resolve(result);
    });
  });
}
