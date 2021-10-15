import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        // TODO: call callback from parent component
    };

    render() {
        return (
            <div className="pt-5 pb-2">
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        className="form-control"
                        type="search"
                        placeholder="Search for video..."
                        value={this.state.term}
                        onChange={this.onInputChange}/>
                </form>
            </div>
        );
    }
}

export default SearchBar;