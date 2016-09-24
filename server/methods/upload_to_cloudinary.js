import {Meteor} from 'meteor/meteor';
import cloudinary from "cloudinary";
import Datauri from "datauri";
import PostSchema from '/lib/collections/posts.js';
import {check} from 'meteor/check';


export default function () {
  Meteor.methods({
    'createPost'(formData) {
      check(formData,Object);

      formData.body = formData.body.replace('<div class="quill-contents ql-container ql-snow"><br></div></div><div class="ql-tooltip ql-link-tooltip" style="left: -10000px; top: 83px;"><span class="title">Visit URL:&nbsp;</span> <a href="javascript:;" class="url" target="_blank">javascript:;</a> <input class="input" type="text"> <span>&nbsp;-&nbsp;</span> <a href="javascript:;" class="change">Change</a> <a href="javascript:;" class="remove">Remove</a> <a href="javascript:;" class="done">Done</a></div><div class="ql-tooltip ql-image-tooltip" style="left: -10000px;"><input class="input" type="textbox"> <div class="preview"> <span>Preview</span> </div> <a href="javascript:;" class="cancel">Cancel</a> <a href="javascript:;" class="insert">Insert</a></div><div class="ql-paste-manager" contenteditable="true" tabindex="-1"></div></div>',"");
      formData.body = formData.body.replace('<div class="ql-tooltip ql-link-tooltip" style="left: -10000px;"><span class="title">Visit URL:&nbsp;</span> <a href="#" class="url" target="_blank"></a> <input class="input" type="text"> <span>&nbsp;-&nbsp;</span> <a href="javascript:;" class="change">Change</a> <a href="javascript:;" class="remove">Remove</a> <a href="javascript:;" class="done">Done</a></div><div class="ql-tooltip ql-image-tooltip" style="left: -10000px;"><input class="input" type="textbox"> <div class="preview"> <span>Preview</span> </div> <a href="javascript:;" class="cancel">Cancel</a> <a href="javascript:;" class="insert">Insert</a></div><div class="ql-paste-manager" contenteditable="true" tabindex="-1"></div></div>',"");
      return new Promise((resolve)=>{
        uploadImage(formData.images).then(result=> {
          const post = new PostSchema();
          post.slug = formData.title.split(' ').join('-');
          post.slug = post.slug.toLowerCase();
          post.title = formData.title;
          post.body = formData.body;
          post.user_id = Meteor.userId();
          post.images  = result;
          post.type = formData.type;
          post.description = formData.description;
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
    'updatePost'(formData) {
      check(formData,Object);
      formData.body = formData.body.replace('<div class="quill-contents ql-container ql-snow"><br></div></div><div class="ql-tooltip ql-link-tooltip" style="left: -10000px; top: 83px;"><span class="title">Visit URL:&nbsp;</span> <a href="javascript:;" class="url" target="_blank">javascript:;</a> <input class="input" type="text"> <span>&nbsp;-&nbsp;</span> <a href="javascript:;" class="change">Change</a> <a href="javascript:;" class="remove">Remove</a> <a href="javascript:;" class="done">Done</a></div><div class="ql-tooltip ql-image-tooltip" style="left: -10000px;"><input class="input" type="textbox"> <div class="preview"> <span>Preview</span> </div> <a href="javascript:;" class="cancel">Cancel</a> <a href="javascript:;" class="insert">Insert</a></div><div class="ql-paste-manager" contenteditable="true" tabindex="-1"></div></div>',"");
      formData.body = formData.body.replace('<div class="ql-tooltip ql-link-tooltip" style="left: -10000px;"><span class="title">Visit URL:&nbsp;</span> <a href="#" class="url" target="_blank"></a> <input class="input" type="text"> <span>&nbsp;-&nbsp;</span> <a href="javascript:;" class="change">Change</a> <a href="javascript:;" class="remove">Remove</a> <a href="javascript:;" class="done">Done</a></div><div class="ql-tooltip ql-image-tooltip" style="left: -10000px;"><input class="input" type="textbox"> <div class="preview"> <span>Preview</span> </div> <a href="javascript:;" class="cancel">Cancel</a> <a href="javascript:;" class="insert">Insert</a></div><div class="ql-paste-manager" contenteditable="true" tabindex="-1"></div></div>',"");
      if(formData.images){
        return new Promise((resolve)=>{
          uploadImage(formData.images).then(result=> {
            var post = PostSchema.findOne({_id:formData.posts_id});
            post._id = formData.posts_id;
            post.slug =formData.title.split(' ').join('-');
            post.slug = post.slug.toLowerCase();
            post.title = formData.title;
            post.body = formData.body;
            post.user_id = Meteor.userId();
            post.images  = result;
            post.type = formData.type;
            post.description = formData.description;
            post.save((err)=>{
              if(err){
                const errors = err.details[0];
                throw new Meteor.Error(errors.message);
              }
              resolve("Created Transaction");
            });
          });
        });
      }else {
        var post = PostSchema.findOne({_id:formData.posts_id});
        post._id = formData.posts_id;
        post.slug =formData.title.split(' ').join('-');
        post.slug = post.slug.toLowerCase();
        post.title = formData.title;
        post.body = formData.body;
        post.user_id = Meteor.userId();
        post.type = formData.type;
        post.description = formData.description;
        post.save((err)=>{
          if(err){
            const errors = err.details[0];
            throw new Meteor.Error(errors.message);
          }
          return "Created Transaction";
        });
      }
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
