import React, { Component } from 'react';
import Axios from 'axios';
import Poste from './poste';

class PostesList extends Component{


    state = {
        postes: [],
        currentId: null,
        open: false
    }; 

constructor(){
    super();
    
   
    this.getPostes(); 
}

getPostes = () => {
    Axios.get('http://localhost:5000/api/postes')
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


handleOpen = () =>{
    this.setState({open: true});
}


handleClose = () =>{
    this.setState({open: false});
}


    
render(){
    return(
    <div>
        {this.state.postes ? (
            <div>
                         { this.state.postes.map(poste => <Poste poste={poste} onClick={this.handleOpen} key={poste.poste_id}></Poste>)}
                         {/* { this.state.postes.map(poste => <Poste poste={poste} onClick={() => console.log('setState current id & open modal')} key={poste.poste_id}></Poste>)} */}
                         {/* COMPONENT MODAL */}
            </div>
        ) : "Pas de postes en cours"}
    </div>
    );
}
}
export default PostesList;