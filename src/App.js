import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Canvas from './components/Canvas';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' component={ Canvas } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
