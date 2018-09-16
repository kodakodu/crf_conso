import React , { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Moment from 'moment';
import { Link } from 'react-router-dom';

// const Poste = (props) => {
class Poste extends Component{
    state = {
        currentId: null,
        open: false
    }; 
    // constructor(){
    //     super();



    //     this.handleOpen = this.handleOpen.bind(this);

    // }

    handleOpen = () =>{
        this.setState({open: true});
        //this.setState({currentId: this.poste.poste_id});
        console.log("handleOpen()");
    }
    
    
    handleClose = () =>{
        this.setState({open: false});
        console.log("handleClose()");
    }



render(){

return(
    <div>
    {/* <Route exact path='/saisie' component={Saisie}></Route> */}
{/*         {this.props.poste ? (
               <Card style={{height:'300px',margin:'50px'}}>
                    <CardContent style={{float:'left'}}>
                        <Typography gutterBottom variant="display1" component="h2" style={{backgroundColor:'lightgray'}}>
                            {this.props.poste.titre}
                        </Typography>
                        <Typography variant="headline" gutterBottom>{Moment(this.props.poste.date).utc().format('DD-MM-YYYY')}
                        </Typography>
                        <Typography variant="body1" style={{width:'250px'}}>
                            {this.props.poste.description}
                        </Typography>
                        
                    </CardContent>
                    <CardActions style={{float:'right'}}>
                        <Button variant="contained" size="medium" color="secondary" component={Link} to='/Saisie'> */}
                        {/* <Button variant="contained" size="medium" color="secondary" onClick={this.handleOpen.bind(this)}>   */}
                           {/*  Ouvrir
                        </Button>
                    </CardActions>
                </Card>
        ): null}
         <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={{position: 'absolute',backgroundColor:'white'}}>
            <Typography variant="title" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            {/* <SimpleModalWrapped /> */}
{/*           </div>
         
        </Modal> */}

        {this.props.poste ? (
            <div className="container">
              <div className="row">
              <div className="col-sm-6 col-md-8 col-lg-3 mt-4">
                <div className="card">
                    <img className="card-img-top" src="http://localhost:3000/img/Poste-de-secours.jpg"/>
                    <div className="card-block">
                        <figure className="profile">
                            <img src="http://success-at-work.com/wp-content/uploads/2015/04/free-stock-photos.gif" className="profile-avatar" alt=""/>
                        </figure>
                        <h4 className="card-title mt-2">{this.props.poste.titre}</h4>
                        <div className="meta">
                            <a>{Moment(this.props.poste.date).utc().format('DD-MM-YYYY')}</a>
                        </div>
                        <div className="card-text">
                        {this.props.poste.description}
                        </div>
                    </div>
                    <div className="card-footer">
                        {/* <button className="btn btn-primary float-right btn-sm" component={Link} to='/Saisie'>Ouvrir</button> */}
                        <a href="/Saisie" className="btn btn-primary float-right" role="button">Ouvrir</a>
                    </div>
                </div>
            </div>
</div>
        </div> ) : null}
   
    </div>
);
}
}
export default Poste;