import React, { Component } from 'react';
//import Grid from '@material-ui/core/Grid';
//import TexField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Axios from 'axios';
import Poste from './Poste';

class PostesList extends Component{


    state = {
        postes: [],
    }; 

constructor(){
    super();
    
   
    this.getPostes(); 
}

getPostes = () => {
    console.log("test depuis getPostes()");

    Axios.get('http://vps313166.ovh.net:5000/api/postes')
    .then(response => {
        const postes = response.data;
        this.setState({ postes});
    })
    // fetch('http://vps313166.ovh.net:5000/api/postes')
    // .then(response => response.json())
    // .then(response => this.setState({ postes: response}));    
}


componentDidMount(){
    
    this.getPostes(); 
    
    // fetch('http://vps313166.ovh.net:5000/api/postes')
    // .then(response => response.json())
    // .then(response =>{
    //      console.log(response);
    //  })
    // .then(response => this.setState({postes: response}))
    //.then((response)=>{
    //    this.setState({postes})
    //})
    // .catch((error)=>{
    //         console.log('Erreur lors du fetch!');
    //         console.log(error);
    // })

    //console.log(response);
    //this.getPostes();

}

    
render(){
    return(
    <div>
        {this.state.postes ? (
            <div>
                         { this.state.postes.map(poste => <Poste poste={poste}></Poste>)}
            </div>
        ) : "Pas de postes en cours"}
    </div>
    )
}
}
export default PostesList;