import React from'react'
import { Typography, withStyles, Switch } from '@material-ui/core';

const styles = () => ({
    title: {
        fontSize: '25px',
        color: '#004857',
        textAlign: 'center'
    },
    text: {
        fontSize: '20px',
        color: '#004857',
    }  
})

const LightSwitch = ({ classes, handleSwitch, value }) => {
    return <div>
        <br></br>
        <Typography className={classes.title}>Light</Typography>
        <Typography className={classes.text}>
        Switch
        <Switch color="primary" 
            checked={value} 
            onChange={(e,c) => handleSwitch(c)}>
        </Switch>
    </Typography>
    </div>
}

export default withStyles(styles)(LightSwitch)