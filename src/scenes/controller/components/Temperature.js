import React from 'react'
import { Typography, withStyles, Button } from '@material-ui/core';

const styles = () => ({
    title: {
        fontSize: '25px',
        color: 'white',
        textAlign: 'center'
    },
    text: {
        fontSize: '20px',
        color: 'white',
        textAlign: 'center'
    }
    
})

const Temperature = ({ classes, getTemperature }) => {
    return <div>
        <Typography className={classes.title}>
            Temperature
        </Typography>
        <Button onClick={() => getTemperature()}>Get</Button>
    </div>
}


export default withStyles(styles)(Temperature)