import React from 'react'
import { Typography, withStyles, Button, Select, MenuItem } from '@material-ui/core';

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

const TemperatureInterval = ({ classes, temperatureInterval }) => {
    return <div>
        <Typography className={classes.title}>
            Temperature
        </Typography>
        <Button onClick={() => temperatureInterval()}>Get</Button>
    </div>
}


export default withStyles(styles)(TemperatureInterval)