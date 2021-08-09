import React from 'react';

const Spinner = (props) => {
    return (
        <div className="bg loading-bg">
            <h2 className="text-center mb-5">{props.message}</h2>
            <div 
                className="spinner-border text-info" 
                role="status">
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    // if in parent component message attr wouldn't be provided:
    message: 'Loading...'
};

export default Spinner;