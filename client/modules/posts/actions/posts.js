export default {
  createPost({Meteor,LocalState,FlowRouter},formData){
    var reader = [];
    var file = formData.images[0];
    if (!file) {return;}
     reader = new FileReader();
     reader.onload = ()=>{
          var buffer = new Uint8Array(reader.result);
          formData.images = buffer;
          Meteor.call('createPost',formData, (err)=> {
            if(err){
              throw new Error(err.message);
            }
          });
      }
      // reader.onprogress = (data)=>{
      //   if(data.lengthComputable){
      //     var progress = parseInt(((data.loaded / data.total)*100),10);
      //
      //   }
      // }
      reader.readAsArrayBuffer(file);
  },
  updatePost({Meteor,LocalState,FlowRouter},formData){
    var reader = [];
    var file = formData.images[0];
    if (!file) {return;}
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
  },

  clearErrors({LocalState}) {
    LocalState.set('title',null);
    LocalState.set('body',null);
    return ;
  },
}
