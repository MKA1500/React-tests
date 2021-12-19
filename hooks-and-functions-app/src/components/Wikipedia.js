import React, { useState } from 'react';

const Wikipedia = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <div 
                key={item.id}
                className={`wiki-card card ${active}`}
                onClick={() => onTitleClick(index)}>
                <div className="card-body">
                    <div
                        className={`card-title ${active}`}>
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
        <div className='wiki'>
            {renderedItems}
            <h3>Active index: {activeIndex}</h3>
        </div>   
    );
};

export default Wikipedia;