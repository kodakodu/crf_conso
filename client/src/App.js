import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Navbar from './components/navbar';
import PostesList from './components/PostesList';
import Button from '@material-ui/core/Button';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <PostesList/>
    </div>
    );
  }
}
export default App;
