// import react here
import React, {Component} from 'react';
import '../Map/googleMap.css';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Geocode from 'react-geocode';
import API from '../../utils/API';

class GoogleMapsContainer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            searchData: '',
            shops: [],
            mapLat: '33.7490',
            mapLng: '-84.3880',
        }

    }

    // LifeCycle Functions Needed //
    // ========================== //
    
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    //     // console.log(nextProps.passedSearchData);
    //     // console.log(this.props.passedSearchData);
    //     // console.log(this.state.searchData);
    //     if (nextProps.passedSearchData !== this.props.passedSearchData) {
    //         this.setState({
    //             searchData: nextProps.passedSearchData
    //         });
    //         this.handleRecieveSearchData();
    //         // console.log(this.state.searchData);
    //     }
    // }

    componentDidUpdate(prevProps) {
        if (this.props.passedSearchData !== prevProps.passedSearchData) {
            this.setState({
                searchData: this.props.searchData
            });
            this.handleRecieveSearchData();
        }
    }

    componentDidMount() {
        // get all axios request
        API.getShops({})
        .then(res => {
            this.setState({
                shops: res.data
            })
            console.log(this.state.shops);
        })
        .catch(err => console.log(err));

    }

    // Helper Methods Needed //
    // ===================== //

    convertAddress = (props) => {
        console.log(this.props.passedSearchData)
        Geocode.setApiKey("AIzaSyBAB0MnU4EpRA9f1LI5gitB7drnRpYEQo0");
        Geocode.fromAddress(this.props.passedSearchData).then(
            response => {
                const {lat, lng} = response.results[0].geometry.location;
                console.log(lat, lng);
                this.setState({
                    mapLat: lat,
                    mapLng: lng
                });
            },
            error => {
                console.log(error);
                console.log('this didnt work');
            }
        )
    };

    convertMarkerAddress = (data) => {
        Geocode.setApiKey('AIzaSyCpjcewBZ-XhLjZayxSQKUeXXzSU31Mzbk');
        Geocode.fromAddress(data).then(
            response => {
                const {lat, lng} = response.results[0].geometry.location;
                console.log(lat, lng);
            },
            err => {
                console.log(err);
                console.log('there was an error converting the marker addresses');
            }
        )
    }
    
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: {}
            });
        }
    };

    handleRecieveSearchData = (props) => {
        console.log('handleRecieveSearchData called');
        this.convertAddress();
    };

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
                center={{lat: this.state.mapLat, lng: this.state.mapLng}}
                zoom={8}
            >
                {this.state.shops.length ? (
                    this.state.shops.map(shop => (
                        <Marker
                        key={shop.id}
                        onClick={this.onMarkerClick}
                        position={{lat: shop.lat, lng: shop.lng}}
                        name={shop.name}
                        address={shop.address}
                        phone={shop.phone}
                        hours={shop.hours}
                        website={shop.website}
                        facebook={shop.facebook}
                        instagram={shop.instagram}
                        twitter={shop.twitter}
                        roaster={shop.roaster}
                        description={shop.description}
                        />

                    ))

                ) : ( 
                    console.log('there are no shops to map')
                )}
                <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                >
                <div>
                    <ul>
                        <li><h5>{this.state.activeMarker.name}</h5><hr/></li>
                        <li><a>{this.state.activeMarker.address}</a></li>
                        <li><a>{this.state.activeMarker.phone}</a></li>
                        <li><a>{this.state.activeMarker.hours}</a></li>
                        <li><a>{this.state.activeMarker.website}</a></li>
                        <li><a>{this.state.activeMarker.facebook}</a></li>
                        <li><a>{this.state.activeMarker.instagram}</a></li>
                        <li><a>{this.state.activeMarker.twitter}</a></li>
                        <li><a>{this.state.activeMarker.roaster}</a></li>
                        <li><a>{this.state.activeMarker.description}</a></li>
                    </ul>
                </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDvQ6gO8X6KqV_Ghn2lFXBg7MoYGdcTPWM")
})(GoogleMapsContainer)
