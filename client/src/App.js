import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Navbar from './components/navbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      <div container>
        
        <Grid container spacing={24} style={{marginTop:'100px'}}>
          <Grid container spacing={24}>
            <Grid item xs>
              
            </Grid>
            <Grid item xs={4}>
              <Paper>
              <Typography variant='subheading' style={{marginLeft:'10px;'}}>Liste des postes</Typography>    
                <GridList cellHeight={180}>
                  <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Poste 1 Lorem ipsum dolor sit amet, consectetur<Button variant="contained" color="primary">go</Button></ListSubheader>
                  </GridListTile>
                  <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Poste 2 Lorem ipsum dolor sit amet, consectetur<Button variant="contained" color="primary">go</Button></ListSubheader>
                  </GridListTile>
                  <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Poste 3 Lorem ipsum dolor sit amet, consectetur<Button variant="contained" color="primary">go</Button></ListSubheader>
                  </GridListTile>
                </GridList>

              </Paper>
            </Grid>
            <Grid item xs>
              
            </Grid>      
          </Grid>
        </Grid>
        
        </div>
    </div>
    );
  }
}
export default App;
