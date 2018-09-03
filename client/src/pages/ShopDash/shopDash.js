import React, {Component} from 'react';
import DashNavBar from '../../components/NavBar/dashNavBar';
import Column from '../../components/Grid/col';
import Row from '../../components/Grid/row';
import Container from '../../components/Grid/container';
import DelBtn from '../../components/DashElements/delBtn';
import EditBtn from '../../components/DashElements/editBtn';
import SaveBtn from '../../components/DashElements/saveBtn';
import ShopForm from '../../components/DashElements/shopForm';

class ShopDash extends Component {

    // state //
    // ===== //
    constructor(props) {
        super(props);
        this.state = {
            // the state will be all fields that
            // a shop can have. 
            // getShop axios request will set the state
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
            
        }
    }

    // Lifecycle Hook //
    // ================ //
    componentDidMount() {
        // gets all of the data from the database for this user
        // the information from the database will be inserted into input fields
    }

    // Helper Methods Needed //
    // ============== //

    fillInputFields() {
        // this will getShop axios request
        // this wil get the shop by id from the database
        // and will also fill the input fields.
        // this wil be executed in the componentDidMount hook
    }

    handleInputChange() {
        // handles changes in the input fields
    }

    delBtnOnClick(){
        // this will use the deleteShop axios request
        // need to send the Id with the request
    }

    editBtnOnClick(){
        // this will allow the form to be modified
        // makes the form inputs disabled
    }

    saveBtnOnClick(){
        // this will add and update depending on conditions met
        // disables the form inputs
    }

    addShop() {
        // the add shop axios request
    }

    updateShop() {
        // the updateShop axios request
        // need to send the id with it.
    }

    render() {
        return(
            <div>
                <DashNavBar />
                <br />
                <Container>
                    <Row>
                        <Column size="md-12">
                            <ShopForm />
                        </Column>
                    </Row>
                    <Row>
                        <Column size="md-1">
                            <DelBtn />
                        </Column>
                        <Column size="md-1">
                            <EditBtn />
                        </Column>
                        <Column size="md-1">
                            <SaveBtn />
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }
}

// export this component.
export default ShopDash;

