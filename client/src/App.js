import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Navbar from './components/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      
        <Grid container spacing={24}>
          <Grid container spacing={24}>
            <Grid item xs>
              <Paper>xs</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs>
              <Paper>xs</Paper>
            </Grid>      
          </Grid>
        </Grid>
    </div>
    );
  }
}
export default App;
