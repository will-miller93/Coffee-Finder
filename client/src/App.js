import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import the two pages.
// import BrowserRouter as Router, Route, Switch from react router dom
// this component will probably not need to be stateful.

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;


// will probably need to change this to a stateless component
// keep the export.
// import the pages.
// return Router and Switch.
// path for map = '/'
// path for dash = 'dashboard'
// go ahead and delete logo
// go ahead and delete the app.css import