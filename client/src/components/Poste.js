import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Poste = (props) => {
return(
    <div>
        {props.poste ? (
               <Card>
               <CardContent>
                   <Typography gutterBottom variant="headline" component="h2">
                       {props.poste.titre}
                   </Typography>
                   <Typography component="p">
                       {props.poste.description}
                   </Typography>
               </CardContent>
               <CardActions>
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