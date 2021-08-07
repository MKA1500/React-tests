import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         lat: null,
    //         long: null,
    //         errorMessage: ''
    //     };
    // }
    state = {
        lat: null,
        long: null,
        errorMessage: ''
    };

    componentDidMount() {
        console.log('componentDidMount(): was rendered');
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
            },
            (error) => {
                // it is not required to update all properties
                // in the state
                this.setState({
                    errorMessage: error.message
                });
            }
        );
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div className="container">
                    <h2 className="text-center">
                        Error: {this.state.errorMessage}
                    </h2>
                </div>
            );
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay
                    lat={this.state.lat}
                    long={this.state.long}/>;
        }

        return (
            <div className="container">
                <h2 className="text-center">
                    Loading!
                </h2>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// reload after index.js changes:
if (module.hot) {
    module.hot.accept();
}