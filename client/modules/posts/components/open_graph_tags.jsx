import React from 'react';

const OpenGraphTags = ({post}) => (
  <div>
    <meta property="og:url"                   content={window.location.href } />
    <meta property="og:type"                content={post.type} />
    <meta property="og:title"                 content={post.title} />
    <meta property="og:description"       content={post.description}/>
    <meta property="og:image"              content={post.images.secure_url} />
  </div>
);

export default OpenGraphTags;
