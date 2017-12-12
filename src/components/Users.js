import React, {Component} from 'react';
import UserItem from './UserItem';

class Users extends Component {
    render() {
        let userItems;
        if (this.props.users) {
            userItems = this.props.users.map(user => {
                return(
                    <UserItem key={user.name} user={user} />
                );
            });
        }

        return (
            <div className="Users">
                <h3>JSONPlaceholder Users List:</h3>
                <ul>{userItems}</ul>
            </div>
        );
    }
}

export default Users;