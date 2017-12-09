import React, {Component} from 'react';
import './App.css';
import Projects from './components/Projects';

class App extends Component {
    constructor(){
        super();
        this.state = {
            projects: [
                {
                    title: 'Business website',
                    category: 'Web design'
                },
                {
                    title: 'Social App',
                    category: 'Mobile Development'
                },
                {
                    title: 'Ecommerce Shopping Cart',
                    category: 'Web development'
                }
            ]
        }
    }

    render() {
        return (
            <div className="App">
                React App
                <Projects projects={this.state.projects}/>
            </div>
        );
    }
}

export default App;
