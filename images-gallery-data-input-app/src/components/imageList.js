import React from 'react';

const ImageList = (props) => {
    console.log(props.images);

    const images = props.images.map(({ id, description, urls }) => {
        return (
            <img 
                src={urls.small}
                alt={description}
                key={id}
                className="image-item"/>
        );
    });

    return <div className="images-list">{images}</div>;
};

export default ImageList;