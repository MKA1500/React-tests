import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import GiveItems from './data/Items';
import './App.css';

const items = GiveItems();

export default () => {
    return (
        <div className="container py-3">
            <Search />
            <Accordion items={items} />
        </div>
    );
};