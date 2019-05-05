import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        authorName="Maciej"
        timeAgo="Today at 4.50 PM"
        comment="But it’s better to have a framework"/>
      <CommentDetail
        authorName="Darek"
        timeAgo="Today at 4.13 PM"
        comment="It’s possible" />
      <CommentDetail
        authorName="Asia"
        timeAgo="Today at 3.59 PM"
        comment="Is it possible to build microservices using Java EE?" />
      <CommentDetail
        authorName="Artur"
        timeAgo="Today at 3.33 PM"
        comment="microservices using Java EE..." />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
