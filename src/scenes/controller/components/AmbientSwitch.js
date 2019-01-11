import React from 'react'
import { Typography, withStyles, Switch } from '@material-ui/core';

const styles = () => ({
    text: {
        fontSize: '20px',
        color: 'white',
        textAlign: 'center'
    }
})


const AmbientSwitch = ({ classes }) => {
    return <div>
            <Typography className={classes.text}>
                Ambient Light
                <Switch></Switch>
            </Typography>
        </div>
}

export default withStyles(styles)(AmbientSwitch)