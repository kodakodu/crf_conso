import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Moment from 'moment';

const Poste = (props) => {
return(
    <div>
        {props.poste ? (
               <Card style={{height:'250px',margin:'50px'}}>
               <CardContent style={{float:'left'}}>
                   <Typography gutterBottom variant="display1" component="h2" style={{backgroundColor:'lightgray'}}>
                       {props.poste.titre}
                   </Typography>
                   <Typography variant="headline" gutterBottom>{Moment(props.poste.date).utc().format('DD-MM-YYYY')}
                   </Typography>
                   <Typography variant="body1" style={{width:'250px'}}>
                       {props.poste.description}
                   </Typography>
                   
               </CardContent>
               <CardActions style={{float:'right'}}>
                   <Button variant="contained" size="medium" color="secondary" href={props.poste.date} target="_blank">
                       Ouvrir
                   </Button>
               </CardActions>
</Card>
        ): null}
     
    </div>
)
}
export default Poste;