import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Suivi des consommables - Unité locale du Val d'Yerres
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}
export default App;
