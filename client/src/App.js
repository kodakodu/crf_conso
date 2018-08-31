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
      <div container="true">
        
        <Grid container spacing={24} style={{marginTop:'100px'}}>
          <Grid container spacing={24}>
            <Grid item xs>
              
            </Grid>
            <Grid item xs={6}>
              <Paper>
              <Typography variant='subheading' style={{marginLeft:'10px'}}>Liste des postes</Typography>    
                <GridList cellHeight={180}>
                  <GridListTile key="Subheader1" cols={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Poste 1 Lorem ipsum dolor sit amet, consectetur <Button variant="contained" color="primary">go</Button></ListSubheader>
                  </GridListTile>
                  <GridListTile key="Subheader2" cols={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Poste 2 Lorem ipsum dolor sit amet, consectetur <Button variant="contained" color="primary">go</Button></ListSubheader>
                  </GridListTile>
                  <GridListTile key="Subheader3" cols={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Poste 3 Lorem ipsum dolor sit amet, consectetur <Button variant="contained" color="primary">go</Button></ListSubheader>
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
