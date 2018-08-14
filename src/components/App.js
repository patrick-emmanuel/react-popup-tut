import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    );
  }
}

export default App;
