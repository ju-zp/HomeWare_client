import React from 'react'
import { Typography, TextField, withStyles, Button, Select } from '@material-ui/core';

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

const TemperatureInterval = ({ classes, handleTemperature }) => {
    return <div>
        <Typography className={classes.title}>
            Temperature
        </Typography>
        <TextField>
        </TextField>
        <Select>
            
        </Select>
        <Button onClick={handleTemperature}>Set</Button>
    </div>
}

export default withStyles(styles)(TemperatureInterval)