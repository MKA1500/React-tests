import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <div key={item.id} className="card">
                <div className="card-body">
                    <div
                        className={`card-title ${active}`}
                        onClick={() => onTitleClick(index)}>
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
            <h3>Active index: {activeIndex}</h3>
        </div>   
    );
};

export default Accordion;