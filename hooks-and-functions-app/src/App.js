import React from 'react';
import Wikipedia from './components/Wikipedia';
import Search from './components/Search';
import GiveItems from './data/Items';
import './App.css';

const items = GiveItems();

export default () => {
    return (
        <div className="container py-3">
            <Search />
            <Wikipedia items={items} />
        </div>
    );
};