import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, } from '@material-ui/core';
import useStyles from './styles'
// import Button from "../../Button/Button"


const Aservice = ({ service }) => {
    const classes = useStyles ();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={service.image} title={service.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>
                        {service.name}
                    </Typography>
                    <Typography variant="h6">
                        {service.price}
                    </Typography>
                </div>
                <Typography variant="body2" className={classes.typography} color="textSecondary">{service.description}</Typography>
            </CardContent>
            {/* <CardActions disableSpacing className={classes.cardActions}>
            <a href="https://square.site/book/A525MVMSYAYVK/bliss-esthetics-colo-spgs-co"><Button>Book now</Button></a>
            </CardActions> */}
                
            
            
        </Card>
    )
}

export default Aservice