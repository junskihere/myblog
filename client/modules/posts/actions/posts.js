export default {
  createPost({Meteor,LocalState,FlowRouter},formData){

    // const tmppath = URL.createObjectURL(formData.image[0]);

    var file = formData.image[0]; //assuming you have only 1 file
    if (!file) return;


    var reader = new FileReader(); //create a reader according to HTML5 File API

    reader.onload = ()=>{


      var buffer = new Uint8Array(reader.result) ;// convert to binary
      formData.image = buffer;
      Meteor.call("creaetPost",formData,(err)=> {
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

    reader.readAsArrayBuffer(file); //read the file as arraybuffer






  },

  clearErrors({LocalState}) {
    LocalState.set('title',null);
    LocalState.set('body',null);
    return ;
  },
}
