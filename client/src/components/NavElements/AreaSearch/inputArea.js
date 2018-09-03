// import react
import React, {Component} from 'react';

// simple input field for typing in a search area
class AreaSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: ''
        }
    }

    // function to save the input change to state
    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.searchData);
    };
    // function to send the search data back to grandparent
    handleDataSubmit = (event) => {
        event.preventDefault();
        this.props.getSearchData(this.state.searchData);
    };


    render() {
        return(
            <form className='form-inline my-2 my-lg-0'>
                <input className='form-control mr-sm-2' name='searchData' onChange={this.handleInputChange} type='search' placeholder='Search for a city' aria-label='search'></input>
                <button className='btn btn-outline-success my-2 my-sm-0' type='submit' onClick={this.handleDataSubmit}>Search</button>
            </form>
        )
    }
}

// dont forget to export this component
export default AreaSearch;

// this will probably need to be stateful now. 
// so that the data from here can be passed up with a function to MapNav then to MapPage
// and a callback function will passed down to this component to get that data
// so it will need state for the data