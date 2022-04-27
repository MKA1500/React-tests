import React, { useState, useEffect } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        console.log('useEffect');
    }, [term]);
    return (
        <div className="pb-4">
            <input
                value={term}
                onChange={e => setTerm(e.target.value)}
                type="text" 
                className="form-control"
                placeholder="Enter search wiki term" />
        </div>
    );
};

export default Search;