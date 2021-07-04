import React from 'react';
import ReactDOM from 'react-dom';

function getSecondBtnText() {
    return 'Cancel';
}

const App = () => {
    const buttonText = {
        text: 'Submit the form'
    };
    const styleSecondBtn = {
        backgroundColor: 'white',
        color: 'black',
        marginLeft: '5px'
    };

    return (
    <div>
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text" />
        <button style={{backgroundColor: 'blue', color: 'white'}}>
            {buttonText.text}
        </button>
        <button style={styleSecondBtn}>
            {getSecondBtnText()}
        </button>
    </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);