import React, { Component } from 'react';
//import Axios from 'axios';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Saisie extends Component{


     state = {
         postes: [],
         personnes : [
            { nom: 'Underwood', prenom: 'Yann'},
            { nom: 'Navarro', prenom:'Laura'}]
     }; 
    
render() {
    return (
    <div>
        <p>Formulaire de saisie {this.props.poste}</p>
        <form container>
            
                <div>
                    <Typography variant="display1" gutterBottom>Titre poste</Typography>
                </div>
                <div>
                    <Typography variant="headline" gutterBottom>Date poste</Typography>
                </div>
            <FormControl>
                <div>
                <InputLabel htmlFor="nom">Personne</InputLabel>
          <Select
            value={this.state.personnes}
            inputProps={{
              name: 'nom',
              id: 'personne',
            }}
          style={{width:'200px'}}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
                </div>
            </FormControl>    
        </form>
    </div>
    );
}
}
export default Saisie;