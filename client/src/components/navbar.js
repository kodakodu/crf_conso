import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './navbar.css';

class navbar extends Component {
  render() {
    return (
      <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="display1" gutterBottom>
            CRF Tracker 1.0 //
          </Typography>
          {/* <Typography variant="body1" color="inherit" gutterBottom>
              Croix-rouge - Unité locale du Val d'Yerres
          </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}
export default navbar;