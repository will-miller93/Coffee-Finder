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

    // Lifecycle Method //
    // ================ //
    componentDidMount() {
        // gets all of the data from the database for this user
        // the information from the database will be inserted into input fields
    }

    // Helper Methods Needed //
    // ============== //

    fillInputFields() {
        // this function will take the data from the database and fill the inputs
    }

    handleInputChange() {
        // handles changes in the input fields
    }

    delBtnOnClick(){
        // this will find the shop in the database and delete it
        // it will be found by id
    }

    editBtnOnClick(){
        // this will allow the form to be modified
        // makes the form inputs disabled
    }

    saveBtnOnClick(){
        // this will save and update the row in the database
        // will be found by id
        // disables the form inputs
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

