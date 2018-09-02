// import react here
import React, {Component} from 'react';
// import google-map-react
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';


class GoogleMapsContainer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
        // binding this to onClick functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);

    }

    // LifeCycle Functions Needed //
    // ========================== //
    
    componentDidMount() {
        // getAll shops from the database
        // then render the markers
        // attach shop information to the InfoWindow 
    }

    // Helper Methods Needed //
    // ===================== //

    renderMarkers() {
        // will render methods based on the data recieved from Database
    }
    
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }

    // Now Render Return the Map //
    // ========================= //
    render(){
        const mapStyle = {
            width: '100%',
            height: '100%',
            'marginLeft': 'auto',
            'marginRight': 'auto'
        }
        return(
            <Map
                google={this.props.google}
                style={mapStyle}
                onClick={this.onMapClick}
                initialCenter={{ lat: 33.7490, lng: -84.3880 }}
                zoom={8}
            >
            <Marker
                onClick={this.onMarkerClick}
                position={{ lat: 33.7490, lng: -84.3880 }}
            />
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}    
            >
                <div>
                    <h1>info window working</h1>
                </div>
            </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDvQ6gO8X6KqV_Ghn2lFXBg7MoYGdcTPWM")
})(GoogleMapsContainer)

