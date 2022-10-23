import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import GiveItems from './data/Items';
import GiveOptions from './data/Options';
import './App.css';

const items = GiveItems();
const options = GiveOptions();

const App = () => {
    return (
        <div className="container py-3">
            <Dropdown options={options} />
            <Search />
            <Accordion items={items} />
        </div>
    );
};

export default App;