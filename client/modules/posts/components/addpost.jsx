import React from 'react';
import ReactQuill from 'react-quill';
import '/node_modules/quill/dist/quill.base.css';
import '/node_modules/quill/dist/quill.snow.css';


class AddPost extends React.Component{
  componentDidMount() {
    $('.select').material_select();
  }

  render() {

    const {error, loader,loadingpage} = this.props;


    return (

      <div className="container">
        {loader ? loadingpage() :null}
        <div className="row">
          <div className="card-panel  blue-grey lighten-5 valign center"><h4>Add new post</h4></div>
        </div>

        <div className="row">
          <form className="col s12" onSubmit={this.createPost.bind(this)} encType="multipart/form-data">
            <div className="row">
              <div className="input-field col s12">
                  <div className="file-field input-field">
                        <div className="waves-effect waves-light btn blue darken-3">
                          <span>File</span>
                          <input type="file" ref="image" name="fileToUpload" id="fileToUpload"  />
                        </div>
                        <div className="file-path-wrapper">
                          <input className="file-path validate" type="text" />
                        </div>
                      </div>
                </div>
            </div>

            <div className="row">
              <div className="input-field col s12" >
                <input ref="title" id="input_text" type="text" min="10" className={error.title ? "invalid": ""}  onClick={this.resetError.bind(this)}/>
                <label htmlFor="input_text">Title</label>
                  {error.title ?  <span className="errorSpan" style={{color:"red"}}>{error.title}</span>: null}
              </div>
            </div>


            <div className="row">
              <div className="input-field col s12">
                  <textarea ref="description" id="textarea1"  className="materialize-textarea" min="120" onClick={this.resetError.bind(this)}></textarea>
                    <label htmlFor="textarea1">Description</label>
              </div>
            </div>


            <div className="row">
              <div className="input-field col s12">
                <select ref="type" className="select">
                      <option  value="article" defaultValue>article</option>
                      <option  value="video">video</option>
                      <option  value="image">image</option>
                </select>
                <label>Post type</label>
                </div>
            </div>



            <div className="row">
              <div className="input-field col s12 blue lighten-5">
                <ReactQuill  theme="snow"
                                  defaultValue={this.refs.body}
                                  ref="editor"
                                  id="body"
                                  style={{"minHeight":"500px"}}
                                  className={error.title ? "materialize-textarea invalid": "materialize-textarea"}
                                  onClick={this.resetError.bind(this)}
                  />

              </div>
            </div>
            <button type="submit" className="waves-effect waves-light btn blue darken-3" >submit</button>
          </form>
        </div>

      </div>

    );
  }



  createPost(event){
    if(event && event.preventDefault){
      event.preventDefault();
    }

    const {create,LocalState} = this.props;
    LocalState.set("loading",true);
    const {title,editor,image,description, type} = this.refs;
    const body =  editor.getEditor().container.outerHTML;

    const data = {
      title : title.value,
      type: type.value,
      body :body,
      description: description.value,
      images : image.files,
    };
      create(data);
  }

  resetError(event){
    if(event && event.preventDefault){
      event.preventDefault();
    }
    const {clearErrors} = this.props;
    clearErrors();
  }

}

export default AddPost;
