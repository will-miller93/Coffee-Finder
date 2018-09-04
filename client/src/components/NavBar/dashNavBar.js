// importing react
import React, {Component} from 'react';
import Title from '../NavElements/Title/title';
import LogOut from '../NavElements/LogOut/logOutDirect';
import ToMap from '../NavElements/GoToMap/mapDirect';
import {logout} from '../auth/auth';

// this is very simple. Just the parent <nav> element for the navelements
// components to sit it
class DashNavBar extends Component {
    render(){
        return(
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <ul className='navbar-nav mr-auto'>
                    <Title /> 
                    <LogOut onClick={logout}/>
                    <ToMap />
                </ul>
            </nav>
        )
    }
}
// export NavAnchor
export default DashNavBar;

