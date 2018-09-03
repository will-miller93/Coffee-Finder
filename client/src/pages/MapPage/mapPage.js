import React, {Component} from 'react';
import GoogleMapWrapper from '../../components/Map/googleMap';
import MapNavBar from '../../components/NavBar/mapPageNavBar';

class MapPage extends Component {

    // State
    // =====
    constructor(props) {
        super(props);
        this.state = {
            // should only need shops to be an array
            // all of the data from the data base for each shop will be coming with it
            shops: []
        }
    }

    // Lifecycle Hooks Needed //
    // ======================== //
    componentDidMount() {
        // execute the getAllShops method
        // use the newly setState to render markers
    
    }

    // Helper Methods Needed //
    // ===================== //

    getAllShops() {
        // axios to get all the shops.
        // then setState to accept all of the shops  
    }


    render(){
        return(
            <div>
                <MapNavBar />
                <GoogleMapWrapper />
            </div>
        );
    }
}

export default MapPage;

// this page takes the getAll from axios

