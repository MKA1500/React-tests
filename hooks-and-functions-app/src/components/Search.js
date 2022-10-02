import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (term) {
            const search = async () => {
                const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                });
                setResults(data.query.search);
                console.log(data.query.search);
            };
            search();
        }
    }, [term]);

    const renderedResults = results.map((result) => {
        let cleanResult = result.snippet;
        cleanResult = cleanResult.replace(/<[^>]*>?/gm, '');
        return (
            <div className="list-group-item" key={result.pageid}>
                <h5 className="mb-1">{result.title}</h5>
                <small>{cleanResult}</small>
            </div>
        );
    });

    return (
        <div className="pb-4">
            <input
                value={term}
                onChange={e => setTerm(e.target.value)}
                type="text" 
                className="form-control pb-2"
                placeholder="Enter search wiki term" />
            <div className="list-group">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;