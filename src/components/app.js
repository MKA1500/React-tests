import React from 'react';
import TodosList from './todos-list';

const todos = [
    {
        task: 'do shopping',
        isCompleted: false
    },
    {
        task: 'eat dinner',
        isCompleted: true
    }
];


export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React Test</h1>
                <TodosList />
            </div>
    );
    }
}