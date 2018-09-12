import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';
import MapPage from './pages/MapPage/mapPage';
import ShopDash from './pages/ShopDash/shopDash';

const App = () => {
  return(
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path='https://pure-taiga-14555.herokuapp.com/' component={MapPage} />
          <Route exact path='https://pure-taiga-14555.herokuapp.com/dashboard' component={ShopDash} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;