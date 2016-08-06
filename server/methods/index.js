import accounts from './accounts.js';
import uploadToCloundinary from './upload_to_cloudinary.js';
import posts from './posts';

export default function (){
  accounts();
  uploadToCloundinary();
  posts();
}
