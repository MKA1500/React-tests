import React from 'react';
import CreateTodo from './create-todo';
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
    constructor(props) {
        super(props);
        this.state = {
            todos /* i.e. todos: todos */
        };
    }
    render() {
        return (
            <div>
                <h1>React ToDo List</h1>
                <CreateTodo />
                <TodosList todos={this.state.todos}/>
            </div>
        );
    }
}