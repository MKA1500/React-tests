import React, {Component} from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Users from './components/Users';


class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            users: []
        }
    }

    getUsers() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({users: data}, function(){
                    console.log(this.state);
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        });
    }

    getProjects() {
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: 'Business website',
                    category: 'Web design'
                },
                {
                    id: uuid.v4(),
                    title: 'Social App',
                    category: 'Mobile Development'
                },
                {
                    id: uuid.v4(),
                    title: 'Ecommerce Shopping Cart',
                    category: 'Web development'
                }
            ]
        });
    }

    componentWillMount() {
        this.getProjects();
        this.getUsers();
    }

    componentDidMount() {
        this.getUsers();
    }

    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects});
    }

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects: projects});
    }

    render() {
        return (
            <div className="App container">
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
                <Users users={this.state.users}/>
            </div>
        );
    }
}

export default App;
