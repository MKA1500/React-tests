import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Selection from './components/Selection';
import GiveItems from './data/Items';
import GiveOptions from './data/Options';
import './App.css';

const items = GiveItems();
const options = GiveOptions();

const App = () => {
    const [selected, setSelected] = useState(options[0].value);

    const selectSomething = (x) => {
        console.log('selectSomething', x);
        setSelected(x);
    };
    return (
        <div className="container py-3">
            <Selection 
                options={options}
                selected={selected}
                onSelectedChange={selectSomething} />
            <Search />
            <Accordion items={items} />
        </div>
    );
};

export default App;