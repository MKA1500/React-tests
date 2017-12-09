import React, { Component } from 'react';

class Projects extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="Projects">
                <p>React Projects</p>
                <p>{this.props.test}</p>
            </div>
        );
    }
}

export default Projects;