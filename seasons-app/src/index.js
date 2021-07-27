import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );
    
        return <div className="container">Hi there!</div>;
    };
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);