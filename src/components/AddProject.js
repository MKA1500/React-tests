import React, {Component} from 'react';

class AddProjects extends Component {
    static defaultProps = {
        categories: ['Web design', 'Mobile Development', 'Web development']
    }

    handleSubmit(e){
        console.log('submitted');
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label><br />
                        <input type="text" ref="title" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Category</label><br />
                        <select ref="category" className="form-control" >
                            {categoryOptions}
                        </select>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-danger"/>
                </form>
            </div>
        );
    }
}

export default AddProjects;