import React from 'react';
// import BrowserRouter as Router, Route, Switch from react router dom
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import the two pages
import MapPage from './pages/MapPage/mapPage';
import ShopDash from './pages/ShopDash/shopDash';

const App = () => {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={MapPage} />
          <Route exact path='/dashboard' component={ShopDash} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;