import React from 'react';

const Accordion = ({ items }) => {
    const renderedItems = items.map(item => {
        return (
            <div key={item.id} className="card">
                <div className="card-body">
                    <div
                        className="card-title"
                        onClick={() => console.log(item.id, item.title)}>
                        <i className="dropdown-icon"></i>
                        {item.title}
                    </div>
                    <div className="card-text">
                        <p>{item.content}</p>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className='accordion'>
            {renderedItems}
        </div>   
    );
};

export default Accordion;