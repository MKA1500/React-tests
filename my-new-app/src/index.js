import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h2>Warning</h2>
                    Press 'Approve' to continue.
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Maciej"
                    time="Today at 6:57 PM"
                    content="Brussels Region will have administered over one million doses."
                    image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Gino"
                    time="Today at 6:00 PM"
                    content="Region will have administered over one million doses of vaccines against Covid-19 by Sunday."
                    image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Monika"
                    time="Today at 5:43 PM"
                    content="Will have administered over one million doses of vaccines against Covid-19."
                    image={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);