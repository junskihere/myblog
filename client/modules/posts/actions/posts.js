export default {
  createPost({Meteor,LocalState,FlowRouter},formData){
    loopObject(formData.images).then(result=> {
      const images = {};
    // for(var i = 0; i <= formData.images.length ; i++){
    //   images[i] = result[i];
    // }

      formData.images = result[0];
      var eArray = result.values();

for (let n of eArray) {
  console.log(n);
}

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
      const imageArray = new Array();
        for(var i = 0; i <= images.length ; i++){
          converToBinary(images[i]).then(result=> {
            if (i >=  images.length){
              console.log(imageArray);

              resolve(imageArray);
            }


            imageArray.push(result);
          });

        }

  });
}
