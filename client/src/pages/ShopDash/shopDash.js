import React, {Component} from 'react';
import DashNavBar from '../../components/NavBar/dashNavBar';
import Column from '../../components/Grid/col';
import Row from '../../components/Grid/row';
import Container from '../../components/Grid/container';
import EditBtn from '../../components/DashElements/editBtn';
import SaveBtn from '../../components/DashElements/saveBtn';
import TextArea from '../../components/Form/textArea';
import Input from '../../components/Form/input';
import API from '../../utils/API';
import Geocode from 'react-geocode';
import '../../components/auth/auth';
import {setIdToken, setAccessToken} from '../../components/auth/auth';
import jwt_decode from 'jwt-decode';

class ShopDash extends Component {

    // state //
    // ===== //
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: '',
            hours: '',
            website: '',
            facebook: '',
            instagram: '',
            twitter: '',
            roaster: '',
            description: '',
            shoplat: '',
            shoplng: '',
            shopId: '',
            disabled: true,
            saveButtonDisabled: false,
            receivedShop: false
        }
    }

    // Lifecycle Hook //
    // ================ //
    componentDidMount() {
        let userId = '';
        if (localStorage.getItem('id_token')) {
            let uid = localStorage.getItem('id_token');
            let userInfo = jwt_decode(uid);
            userId = userInfo.sub;
            console.log(userId);
            this.setState({
                shopId: userId
            });
        } else {
            console.log('creating tokens');
            setIdToken();
            setAccessToken();
            let token = localStorage.getItem('id_token');
            let userInfo = jwt_decode(token);
            userId = userInfo.sub
            console.log(userId);
            this.setState({
                shopId: userId
            });
        }
    }

    // Helper Methods Needed //
    // ============== //

    fillInputFields() {
        // and will also fill the input fields.
        // this wil be executed in the componentDidMount hook
        // set values = state
        API.getOneShop(this.state.uSub)
            .then(res => {
                console.log(res);
                this.setState({
                    name: res.data.name,
                    address: res.data.address,
                    phone: res.data.phone,
                    hours: res.data.hours,
                    website: res.data.website,
                    facebook: res.data.facebook,
                    instagram: res.data.instagram,
                    twitter: res.data.twitter,
                    roaster: res.data.roaster,
                    description: res.data.description,
                    lat: res.data.shoplat,
                    lng: res.data.shoplng
                });
            })
            .catch(err => {
                console.log(err);
                console.log('there was an error in getting one shop from the database.');
            })
    }

    handleSaveButtonClick() {
        const condition = this.state.receivedShop;
        if (condition === false) {
            this.addShop();
        } else {
            this.updateShop();
        }
    }

    handleInputChange = (event) => {
        // this will handle changes for all form inputs
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    toggleFormInputs = () => {
        // change state of disabled
        console.log('clicked');
        console.log(this.state.disabled);
        if (this.state.disabled === true) {
            this.setState({
                disabled: false
            });
            console.log('inputs enabled');
        } else if ( this.state.disabled === false ) {
            this.setState({
                disabled: true
            });
            console.log('inputs disabled');
        };
    };

    addShop = event => {
        event.preventDefault();
        if (this.state.name && this.state.address && this.state.roaster) {
            this.setState({
                saveButtonDisabled: false
            });
            Geocode.setApiKey('AIzaSyAVdqW7SGXiqQSJtkdrriwAbMwkM79Gagw');
            Geocode.fromAddress(this.state.address).then(response => {
                const {lat, lng} = response.results[0].geometry.location;
                this.setState({
                    shoplat: lat,
                    shoplng: lng
                });
                console.log(lat, lng);
                console.log(this.state.shoplat, this.state.shoplng);
                API.addShop({
                    name: this.state.name,
                    address: this.state.address,
                    phone: this.state.phone,
                    hours: this.state.hours,
                    website: this.state.website,
                    facebook: this.state.facebook,
                    instagram: this.state.instagram,
                    twitter: this.state.twitter,
                    roaster: this.state.roaster,
                    description: this.state.description,
                    lat: this.state.shoplat,
                    lng: this.state.shoplng,
                    userId: this.state.userId
                })
                .then(res => {
                    this.setState({
                        disabled: true
                    })
                })
                // then redirect to '/'
                .catch(err => console.log(err));
            },
            error => {
                console.log(error);
                console.log('conversion failed');
            });
            // console.log('save button should be enabled');

        } else if (!this.state.name || !this.state.address || !this.state.roaster) {
            this.setState({
                saveButtonDisabled: true
            });
            console.log('save button should be disabled');
        }
    };

    updateShop() {
        // the updateShop axios request
        // will be using the UID from authentication to update.
        API.updateShop(this.state.userId, {
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone,
            hours: this.state.hours,
            website: this.state.website,
            facebook: this.state.facebook,
            instagram: this.state.instagram,
            twitter: this.state.twitter,
            roaster: this.state.roaster,
            description: this.state.description,
            lat: this.state.shoplat,
            lng: this.state.shoplng,
            userId: this.state.userId
        })
        .then(res => {
            this.setState({
                disabled: true,
                receivedShop: true
            });
        }).catch(err => {
            console.log(err);
            console.log('error on shopDash page in update shop function.');
        });
    }

    render() {
        return(
            <div>
                <DashNavBar />
                <br />
                <Container>
                    <Row>
                        <Column size="md-12">
                            {/* <ShopForm /> */}
                            <form>
                                <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name='name'
                                placeholder='Shop Name (Required)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.address}
                                onChange={this.handleInputChange}
                                name='address'
                                placeholder='Address (Required)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.phone}
                                onChange={this.handleInputChange}
                                name='phone'
                                placeholder='Phone Number (Optional)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.hours}
                                onChange={this.handleInputChange}
                                name='hours'
                                placeholder='Shop Hours (Optional)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.website}
                                onChange={this.handleInputChange}
                                name='website'
                                placeholder='Website URL (Optional)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.facebook}
                                onChange={this.handleInputChange}
                                name='facebook'
                                placeholder='Facebook Link (Optional)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.instagram}
                                onChange={this.handleInputChange}
                                name='instagram'
                                placeholder='Instagram Link (Optional)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.twitter}
                                onChange={this.handleInputChange}
                                name='twitter'
                                placeholder='Twitter Link (Optional)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.roaster}
                                onChange={this.handleInputChange}
                                name='roaster'
                                placeholder='Roaster Used (Required)'
                                disabled={this.state.disabled}
                                />
                                <TextArea
                                value={this.state.description}
                                onChange={this.handleInputChange}
                                name='description'
                                placeholder='Description (Optional)'
                                disabled={this.state.disabled}
                                />
                            </form>
                        </Column>
                    </Row>
                    <Row>
                        <Column size="md-1">
                            <EditBtn toggleInputs={this.toggleFormInputs}/>
                        </Column>
                        <Column size="md-1">
                            <SaveBtn addShop={this.addShop}/>
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }
}

// export this component.
export default ShopDash;

