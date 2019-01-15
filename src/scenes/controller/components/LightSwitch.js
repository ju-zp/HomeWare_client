import React from'react'
import { Typography, withStyles, Switch } from '@material-ui/core';

const styles = () => ({
    text: {
        fontSize: '20px',
        color: 'white'
    }
    
})

const LightSwitch = ({ classes, handleSwitch, value }) => {
    return <Typography className={classes.text}>
        Light Switch
        <Switch checked={value} onChange={(e,c) => handleSwitch(c)}></Switch>
    </Typography>
}

export default withStyles(styles)(LightSwitch)