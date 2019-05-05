import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={ faker.image.avatar() }/>
      </a>
      <div className="content">
        <a href="/" className="author">
          Maciej
        </a>
        <div className="metadata">
          <span className="date">Todat at 7:00 PM</span>
        </div>
        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing. Mauris porttitor aliquam libero, a rhoncus tortor cursus quis.</div>
      </div>
    </div>
  );
};

export default CommentDetail;
