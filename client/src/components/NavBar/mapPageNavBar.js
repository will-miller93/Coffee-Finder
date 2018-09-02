// importing react
import React, {Component} from 'react';
import Title from '../NavElements/Title/title';
import LogIn from '../NavElements/LogIn/logInDirect';
import LogOut from '../NavElements/LogOut/logOutDirect';
import DashBoard from '../NavElements/DashBoard/dashDirect';
import AreaSearch from '../NavElements/AreaSearch/inputArea';


// this is very simple. Just the parent <nav> element for the navelements
// components to sit it
class MapNavBar extends Component {
    render(){
        return(
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <ul className='navbar-nav mr-auto'>
                    <Title />
                    <LogIn />
                    <LogOut />
                    <DashBoard />
                    <AreaSearch />
                </ul>
            </nav>
        )
    }
}
// export NavAnchor
export default MapNavBar;