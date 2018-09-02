import React from 'react';

const Logout = () => (

        <li className="nav-item">
            <a className="nav-link" href="!#"> Logout </a>
        </li>

);

export default Logout;
// this will need some functionality to log the user out
// maybe delete their credentials from the local storage.
// either that or redirect to the logout for Auth0
