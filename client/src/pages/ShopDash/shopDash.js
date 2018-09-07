import React, {Component} from 'react';
import DashNavBar from '../../components/NavBar/dashNavBar';
import Column from '../../components/Grid/col';
import Row from '../../components/Grid/row';
import Container from '../../components/Grid/container';
import EditBtn from '../../components/DashElements/editBtn';
import DelBtn from '../../components/DashElements/delBtn';
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
            id: '',
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
            shopId: '', // this will be the decoded id_token set by auth0. used to get one from the database.
            disabled: true,
            saveButtonDisabled: false,
            receivedShop: false, // state to decide if a shop was recieved from the getOne request. used to decide if to add or update
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
            })
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
            })
        }
    }

    // Helper Methods Needed //
    // ============== //

    fillInputFields = () => {
        // console.log(this.state.shopId);
        console.log('fill input fields has been called');
        API.getOneShop(this.state.shopId)
            .then(res => {
                console.log(res.data);
                this.setState({
                    id: res.data[0].id,
                    name: res.data[0].name,
                    address: res.data[0].address,
                    phone: res.data[0].phone,
                    hours: res.data[0].hours,
                    website: res.data[0].website,
                    facebook: res.data[0].facebook,
                    instagram: res.data[0].instagram,
                    twitter: res.data[0].twitter,
                    roaster: res.data[0].roaster,
                    description: res.data[0].description,
                    receivedShop: true,
                    lat: res.data.shoplat,
                    lng: res.data.shoplng
                });
            })
            .catch(err => {
                console.log(err);
                console.log('there was an error in getting one shop from the database.');
            })
    }

    // handleSaveButtonClick = () => {
    //     this.addShop();
    // };

    handleInputChange = (event) => {
        // this will handle changes for all form inputs
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    toggleFormInputs = () => {
        // change state of disabled
        // this.fillInputFields();
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

    addShop = () => {
        console.log('adding shop was called');
        if (this.state.name && this.state.address && this.state.roaster) {
            this.setState({
                saveButtonDisabled: false
            });
            Geocode.setApiKey('AIzaSyDtX5g-xzjzW6g0bw2ds9KOQlKg_kvCTjE');
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
                    shopId: this.state.shopId
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

    updateShop = () => {
        console.log('updating shop was called');
        Geocode.setApiKey('AIzaSyDtX5g-xzjzW6g0bw2ds9KOQlKg_kvCTjE');
        Geocode.fromAddress(this.state.address).then(response => {
            const {lat, lng} = response.results[0].geometry.location;
            this.setState({
                shoplat: lat,
                shoplng: lng
            });
            console.log(lat, lng);
            console.log(this.state.shoplat, this.state.shoplng);
            API.updateShop(this.state.shopId, {
                // id: this.state.id,
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
                shopId: this.state.shopId
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
        },
        error => {
            console.log(error);
            console.log('conversion failed');
        });
        // the updateShop axios request
        // will be using the UID from authentication to update.

    };

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
                                value={this.state.name || ''}
                                onChange={this.handleInputChange}
                                name='name'
                                placeholder='Shop Name (Required)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.address || ''}
                                onChange={this.handleInputChange}
                                name='address'
                                placeholder='Address (Required)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.phone || ''}
                                onChange={this.handleInputChange}
                                name='phone'
                                placeholder='Phone Number (Optional)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.hours || ''}
                                onChange={this.handleInputChange}
                                name='hours'
                                placeholder='Shop Hours (Optional)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.website || ''}
                                onChange={this.handleInputChange}
                                name='website'
                                placeholder='Website URL (Optional)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.facebook || ''}
                                onChange={this.handleInputChange}
                                name='facebook'
                                placeholder='Facebook Link (Optional)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.instagram || ''}
                                onChange={this.handleInputChange}
                                name='instagram'
                                placeholder='Instagram Link (Optional)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.twitter || ''}
                                onChange={this.handleInputChange}
                                name='twitter'
                                placeholder='Twitter Link (Optional)'
                                disabled={this.state.disabled}
                                />
                                <Input
                                value={this.state.roaster || ''}
                                onChange={this.handleInputChange}
                                name='roaster'
                                placeholder='Roaster Used (Required)'
                                disabled={this.state.disabled}
                                />
                                <TextArea
                                value={this.state.description || ''}
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
                            <SaveBtn handleSaveClick={this.addShop}/>
                        </Column>
                        <Column size='md-1'>
                            <DelBtn handleUpdateClick={this.updateShop}/>
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }
}

// export this component.
export default ShopDash;

