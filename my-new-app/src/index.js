import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {

    return (
        <div className="ui container comments">
            <CommentDetail
                author="Maciej"
                time="Today at 5:57 PM"
                content="Brussels Region will have administered over one million doses of vaccines against Covid-19 by Sunday afternoon."
                image={faker.image.avatar()} />
            <CommentDetail
                author="Gino"
                time="Today at 6:00 PM"
                content="Region will have administered over one million doses of vaccines against Covid-19 by Sunday."
                image={faker.image.avatar()} />
            <CommentDetail author="Monika"
                time="Today at 5:43 PM"
                content="Will have administered over one million doses of vaccines against Covid-19."
                image={faker.image.avatar()} />
            <CommentDetail author="Tom"
                time="Today at 4:50 PM"
                content="Administered over one million doses of vaccines"
                image={faker.image.avatar()} />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);