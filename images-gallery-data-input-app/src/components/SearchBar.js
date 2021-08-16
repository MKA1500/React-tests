import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit(event) {
        event.preventDefault();

        console.log(this.state.term)
    }

    render() {
        return (
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