import React, {Component} from 'react';
import GoogleMapWrapper from '../../components/Map/googleMap';
import MapNavBar from '../../components/NavBar/mapPageNavBar';

class MapPage extends Component {

    // Lifecycle Methods Needed //
    // ======================== //
    componentDidMount() {
        // this will get all shops from database

    }

    // Helper Methods Needed //
    // ===================== //

    renderMarkers() {

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

// Default placement for the google maps.
// in render/ return
    // right here the only thing that you will need to
    // render/return is the google map and all of the map markers

