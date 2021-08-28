import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit(event) {
        event.preventDefault();

        this.props.onSubmitSearch(this.state.term);
    }

    render() {
        return (
            // bind is the old way. I could change onFormSubmit to arrow function...
            <div className="pt-5">
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <input 
                        className="form-control" 
                        type="search" 
                        placeholder="Search" 
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}/>
                </form>
            </div>
        );
    }
}

export default SearchBar;