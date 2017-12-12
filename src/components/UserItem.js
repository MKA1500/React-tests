import React, {Component} from 'react';

class UserItem extends Component {
    render() {
        return (
            <li className="User">
                <div className="listItem">
                    <p><strong>{this.props.user.name}</strong></p>
                    <p>Username: {this.props.user.username}</p>
                    <p>E-mail: {this.props.user.email}</p>
                    <p>Phone: {this.props.user.phone}</p>
                    <p>Website: {this.props.user.website}</p>
                    <p>Address:</p>
                    <p>{this.props.user.address.street}, {this.props.user.address.suite}</p>
                    <p>{this.props.user.address.city}, {this.props.user.address.zipcode}</p>
                    <p>Geo:</p>
                    <p>Lat: {this.props.user.address.geo.lat}, lng: {this.props.user.address.geo.lng}</p>

                </div>
            </li>
        );
    }
}

export default UserItem;