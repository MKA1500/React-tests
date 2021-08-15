import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    render() {
        return (
            <div className="pt-5">
                <form>
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