import React from'react'
import { withStyles } from '@material-ui/core' 
import Slider from '@material-ui/lab/Slider'

const styles = () => ({
    slider: {
        width: 300,
        left: '30%'
    }
})

const ColorSlider = ({ classes }) => {
    return <Slider className={classes.slider} max='255'
    min='0'/>
}

export default withStyles(styles)(ColorSlider)