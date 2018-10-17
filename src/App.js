import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './components/Map.js'
import Key from './components/Key.js'
import css from './App.css'
import {Link, Route, BrowserRouter} from 'react-router-dom'
import Users from './components/router'


class App extends Component {
  render() {
    return (
      <div>
        <div class="center">
          <h1 id="logo">G|2|P</h1>
        </div>
        <div className="App">
          <Map/>
          <Key/>
        </div>
      </div>
      )
    }
}

const Routes = () => {
  return (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/users" component={Users}/>
    </div>
  </BrowserRouter>)
}

export default Routes;
