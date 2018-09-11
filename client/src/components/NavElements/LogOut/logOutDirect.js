import React from 'react';
import {logout} from '../../auth/auth';

const Logout = () => (

        <li className="nav-item">
            {/* <a className="nav-link" href="/" onClick={logout}> Logout </a> */}
            <button type="button" className="btn btn-md btn-link text-muted" onClick={logout}>Logout</button>
        </li>

);

export default Logout;
// this will need some functionality to log the user out
// maybe delete their credentials from the local storage.
// either that or redirect to the logout for Auth0
