import React from 'react';

const Selection = ({ options, selected, onSelectedChange }) => {
    const renderedOptions = options.map((option, index) => {
        return (
            <div 
                className="div-selection-item" 
                key={option.value}
                onClick={() => onSelectedChange(option.value)}>
                {option.label}
            </div>
        );
    });

    return (
        <div className="py-3">
            <div className="div-selection">
                {renderedOptions}
            </div>
            <div>
                <h5>Selected item: {selected}</h5>
            </div>
        </div>
    );
};

export default Selection;