import React from 'react';
import Accordion from './components/Accordion';
import './App.css';

const items = [
    {
        title: 'Lorem ipsum dolor sit amet?',
        content: 'consectetur adipiscing elit. In vulputate mauris eget sem posuere, in ornare lorem pulvinar. Nulla id eros sit amet velit sollicitudin pharetra id a lectus.',
        id: 1
    },
    {
        title: 'Phasellus faucibus libero sed augue?',
        content: 'Rhoncus placerat. Suspendisse tempus, ipsum sit amet aliquet ornare.',
        id: 2
    },
    {
        title: 'Turpis nisl aliquam orci?',
        content: 'Eu aliquam enim nibh vel sem. Donec ipsum quam, lacinia a venenatis et, consequat ut orci.',
        id: 3
    }
];

export default () => {
    return (
        <div className="container py-3">
            <Accordion items={items} />
        </div>
    );
};