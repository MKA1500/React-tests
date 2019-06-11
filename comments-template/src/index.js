import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h2>Warning</h2>
        <p>Are you sure you want to approve?</p>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorName="Maciej"
          timeAgo="Today at 4.50 PM"
          comment="But it’s better to have a framework"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorName="Darek"
          timeAgo="Today at 4.13 PM"
          comment="It’s possible" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorName="Asia"
          timeAgo="Today at 3.59 PM"
          comment="Is it possible to build microservices using Java EE?" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorName="Artur"
          timeAgo="Today at 3.33 PM"
          comment="microservices using Java EE..." />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
