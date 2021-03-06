import React, {Component} from 'react';
import GoogleMapWrapper from '../../components/Map/googleMap';
import MapNavBar from '../../components/NavBar/mapPageNavBar';

class MapPage extends Component {

    // State
    // =====
    constructor(props) {
        super(props);
        this.state = {
            // state for the data recieved from mapNav (which recieved it from inputArea)
            inputData: ''
        }
    }

    // Helper Methods Needed //
    // ===================== //

    // callback function to get the data from grand child
    getSearchData = (searchData) => {
        console.log(searchData);
        this.setState({
            inputData: searchData
        });
        console.log('search data should has been recieved.');
    };

    render(){
        return(
            <div>
                <MapNavBar getSearchData={this.getSearchData}/>
                <GoogleMapWrapper passedSearchData={this.state.inputData} />
            </div>
        );
    }
}

export default MapPage;

// this page takes the getAll from axios

