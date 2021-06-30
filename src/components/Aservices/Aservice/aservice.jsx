import React from 'react'
import { Card, CardMedia, CardContent, Typography, } from '@material-ui/core';
import useStyles from './styles'

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
          </Card>
    )
}

export default Aservice