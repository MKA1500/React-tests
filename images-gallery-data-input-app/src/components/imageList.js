import React from 'react';

const ImageList = (props) => {
    console.log(props.images);

    const images = props.images.map(({ id, description, urls }) => {
        return (
            <div className="col-2 my-3" key={id}>
                <div className="gallery-inner-cell">
                    <img 
                        src={urls.small}
                        alt={description}
                        className="image-item"/>
                    </div>
            </div>
        );
    });

    return <div className="row">{images}</div>;
};

export default ImageList;