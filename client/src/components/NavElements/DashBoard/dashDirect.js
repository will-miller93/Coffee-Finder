import React from 'react';
import {requireAuth} from '../../auth/auth';

const Dashboard = () => (

        <li className="nav-item">
            {/* <a className="nav-link" href="/dashboard"> Dashboard </a> */}
            <button type="button" className="btn btn-md" onClick={requireAuth}>Dashboard</button>
        </li>

);

export default Dashboard;
// this nav element will only be on the navbar if on the
// MapPage