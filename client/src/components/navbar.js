import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './navbar.css';

class navbar extends Component {
  render() {
    return (
            <nav className="navbar navbar-dark" style={{backgroundColor: '#3f51b5'}}>
              <a className="navbar-brand" href="/"><h2>CRF Tracker 1.0 //</h2></a>
            </nav>

    );
  }
}
export default navbar;