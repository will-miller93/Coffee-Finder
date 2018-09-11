import React from 'react';
import {login} from '../../auth/auth';
// this needs to redirect to the auth0 login page
const Login = () => (
        <li className="nav-item">
            {/* <a className="nav-link" href="#"> Login </a> */}
            <button type="button" className="btn btn-md btn-link text-muted" onClick={login}>Login</button>
        </li>
);

export default Login;
// this may need to change to redirect for Auth0
// we will see.
