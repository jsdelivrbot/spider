// { Component } == const Component = React.Component
import React, { Component } from 'react';

//class component
//define a class and give it React.Component f(x)ality;
//always need render method and return jsx
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        //wrap js vars in {} in jsx
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }
    //event handler
    //on/handle(global)/(name of elem you watch for event)/
    //name of event

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
/*
functional component
const SearchBar = () => {
    return <input />;
};
*/

export default SearchBar;
