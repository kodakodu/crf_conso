import React, { Component } from 'react';
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
    Axios.get('http://vps313166.ovh.net:5000/api/postes')
    .then(response => {
        const postes = response.data;
        this.setState({ postes});
    })
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
                         { this.state.postes.map(poste => <Poste poste={poste} key={poste.poste_id}></Poste>)}
            </div>
        ) : "Pas de postes en cours"}
    </div>
    )
}
}
export default PostesList;