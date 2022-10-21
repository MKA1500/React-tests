import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('Poznan');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        // we can't use async directly in the main function of useEffect
        // so the search() was created
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        let cleanResult = result.snippet;
        cleanResult = cleanResult.replace(/<[^>]*>?/gm, '');
        return (
            <div className="list-group-item" key={result.pageid}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{result.title}</h5>
                    <a 
                        className="btn btn-primary btn-sm"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target="_blank"
                        rel="noreferrer">
                        Read
                    </a>
                </div>
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