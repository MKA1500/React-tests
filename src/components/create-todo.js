import React from 'react';

export default class CreateTodo extends React.Component {
    render() {
        return (
        <form onSubmit={this.handleCreate(this)}>
           <input type="text" placeholder="What do I need to do?" ref="createInput"/>
           <button>Create</button>
        </form>
        );
    }

    handleCreate() {
        console.log(this.refs.createInput);
    }
}