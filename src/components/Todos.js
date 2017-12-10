import React, {Component} from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        let todoItems;
        if (this.props.todos) {
            todoItems = this.props.todos.map(todo => {
                return(
                    <TodoItem key={todo.title} todo={todo} />
                );
            });
        }

        return (
            <div className="Todos">
                <h3>JSONPlaceholder To Do List:</h3>
                <ul>{todoItems}</ul>
            </div>
        );
    }
}

export default Todos;