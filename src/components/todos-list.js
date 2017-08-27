import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header.js';
import TodosListItem from './todos-list-item.js';

export default class TodosList extends React.Component {
    renderItems(){
        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />);
    }

    render() {
        return (
            <table>
                <TodosListHeader />
                <tbody>
            {this.renderItems()}
                </tbody>
            </table>
    );
    }
}