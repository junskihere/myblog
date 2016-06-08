export default {
  createPost({Meteor,LocalState,FlowRouter},formData){
    loopObject(formData.images).then(result=> {
      formData.images = result;
      console.log(result[0]);

        // Meteor.call('createPost',formData, (err)=> {
        //   if(err){
        //     throw new Error(err.message);
        //   }
        // }) 
    })
  },

  clearErrors({LocalState}) {
    LocalState.set('title',null);
    LocalState.set('body',null);
    return ;
  },
}

const converToBinary = (rawImage) => {
  return new Promise((resolve) => {
    var reader = [];
    var file = rawImage;
    if (!file) {return;}
     reader = new FileReader();
     reader.onload = ()=>{
          var buffer = new Uint8Array(reader.result);
          resolve(buffer);
      }
      // reader.onprogress = (data)=>{
      //   if(data.lengthComputable){
      //     var progress = parseInt(((data.loaded / data.total)*100),10);
      //
      //   }
      // }
      reader.readAsArrayBuffer(file);
  });
}


const loopObject = (images)=> {
    return new Promise((resolve) => {
      const imageArray = [];
        for(var i = 0; i <= images.length ; i++){
          converToBinary(images[i]).then(result=> {
            if (i >=  images.length){
              resolve(imageArray);
            }
            imageArray.push(result);
          });

        }

  });
}
