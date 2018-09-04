import React from 'react';
// importing BrowserRouter
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';
// import the two pages
import MapPage from './pages/MapPage/mapPage';
import ShopDash from './pages/ShopDash/shopDash';

const App = () => {
  return(
    <Router history={history}>
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