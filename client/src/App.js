import React, { Component } from 'react';
import Navbar from './components/navbar';
import PostesList from './components/postes-list';
import Saisie from './components/saisie';
import {  Switch, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {

    return (

      <div>
        <Navbar/>
        <Main/>
    </div>
    );
  }
}
const Main = () => (
  <Switch>
      <Route exact path='/' component={PostesList}></Route>
      <Route exact path='/saisie' component={Saisie}></Route>
  </Switch>
);
export default App;
