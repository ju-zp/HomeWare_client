import React from'react'
import { Typography, withStyles, Switch } from '@material-ui/core';

const styles = () => ({
    text: {
        fontSize: '20px',
        color: 'white'
    }
    
})

const ControllerText = ({ classes }) => {
    console.log(classes)
    return <Typography className={classes.text}>
        Light Switch
        <Switch></Switch>
    </Typography>
}

export default withStyles(styles)(ControllerText)