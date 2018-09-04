import React from 'react';
import {login} from '../../auth/auth';

const Dashboard = () => (

        <li className="nav-item">
            {/* <a className="nav-link" href="/dashboard"> Dashboard </a> */}
            <button type="button" className="btn btn-md" onClick={login}>Dashboard</button>
        </li>

);

export default Dashboard;
// this nav element will only be on the navbar if on the
// MapPage