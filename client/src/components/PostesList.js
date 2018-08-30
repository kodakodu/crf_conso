import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TexField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';


class PostesList extends Component{

    state = {
        postes: []
    }
constructor(){
    super();
    this.getPostes();
}

getPostes = () => {
    console.log("test depuis getPostes()");
}
    
render(){
    return(
    <div>
        <Typography >composant PostesList</Typography>
    </div>
    )
}
}
export default PostesList;