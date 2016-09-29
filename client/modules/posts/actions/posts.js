export default {
  createPost({Meteor,LocalState,FlowRouter},formData){
    var reader = [];
    var file = formData.images[0];
    if (!file) {return;}
     reader = new FileReader();
     reader.onload = ()=>{
          var buffer = new Uint8Array(reader.result);
          formData.images = buffer;
          Meteor.call('createPost',formData, (err,slug)=> {
            if(err){
              throw new Error(err.message);
            }
             window.location =  Meteor.absoluteUrl() + 'viewpost/'+slug;


          });
      }
      reader.readAsArrayBuffer(file);
  },
  updatePost({Meteor,LocalState,FlowRouter},formData){
    var reader = [];
    var file = formData.images[0];
    if (!file) {
      formData.images = false;
      Meteor.call('updatePost',formData, (err)=> {
        if(err){
          throw new Error(err.message);
        }
      });
  }
    else {

      reader = new FileReader();
      reader.onload = ()=>{
        var buffer = new Uint8Array(reader.result);
        formData.images = buffer;
        Meteor.call('updatePost',formData, (err)=> {
          if(err){
            throw new Error(err.message);
          }
        });
      }
      reader.readAsArrayBuffer(file);
    }
  },

  clearErrors({LocalState}) {
    LocalState.set('title',null);
    LocalState.set('body',null);
    return ;
  },
}
