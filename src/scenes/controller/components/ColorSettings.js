import React from'react'
import { Typography, withStyles, Switch } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider'
import ColorSlider from './ColorSlider'

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

const ControllerText = ({ classes }) => {
    console.log(classes)
    return <div>
        <Typography className={classes.title}>
            Color Settings
        </Typography>
        <Typography className={classes.text}>
            Red
        </Typography>
        <ColorSlider/>
        <Typography className={classes.text}>
            Blue
        </Typography>
        <ColorSlider/>
        <Typography className={classes.text}>
            Green
        </Typography>
        <ColorSlider/>
    </div>
}

export default withStyles(styles)(ControllerText)