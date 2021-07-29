import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            long: null
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
            },
            (error) => console.log(error)
        );
    }

    render() {
        return <div className="container">
            <h2 className="text-center">
                Latitude: {this.state.lat}
            </h2>
            <h2 className="text-center">
                Longitude: {this.state.long}
            </h2>
        </div>;
    };
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);