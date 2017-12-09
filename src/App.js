import React, {Component} from 'react';
import './App.css';
import Projects from './components/Projects';
import AddProject from './components/AddProject';

class App extends Component {
    constructor(){
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount(){
        this.setState({projects: [
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
        ]});
    }

    render() {
        return (
            <div className="App container">
                <AddProject />
                <Projects projects={this.state.projects}/>
            </div>
        );
    }
}

export default App;
