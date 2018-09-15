import React, { Component } from 'react';
//import Axios from 'axios';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Saisie extends Component{


state = {
    //poste: null,
    personnes : [
       { nom: 'Underwood', prenom: 'Yann'},
       { nom: 'Navarro', prenom:'Laura'}]
}; 
    
componentDidMount(){
    this.setState({poste:this.props.poste})
}
    

render() {
    return (
    <div>
            <div className="container">
              <div className="row">
                <div className="col-sm">
                <div class="card">
                  <div class="card-body">
                    <h2>Nom du poste</h2>
                    <h4>XX/XX/XXXX</h4>
                    <p>Description du poste Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus, accusantium laudantium culpa tempora temporibus eum optio similique esse suscipit? Dignissimos repellat non nobis similique voluptates velit consequuntur? Dolores, id.</p>
                  </div>
                </div>
                <form>
                    {/* <div className="form-group">
                      <label for="personne">Personne</label>
                      <input type="email" className="form-control" id="personne" aria-describedby="emailHelp" placeholder="Enter email"/>
                      <small id="emailHelp" className="form-text text-muted">Bénévole transmettant les informations</small>
                    </div> */}
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">Personne</label>
                      <select class="form-control" id="exampleFormControlSelect1">
                        <option>------------</option>
                        <option>Laura Navarro</option>
                        <option>Alexandre</option>
                        <option>Maelle</option>
                        <option>Yann</option>
                        <option>Stéphane</option>
                      </select>
                      <small id="emailHelp" className="form-text text-muted">Bénévole transmettant les informations</small>
                    </div>
                    {/* <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
                </div>
              </div>  
                
            </div>
    </div>
    );
}
}
export default Saisie;