import React, { Component } from'react'
import { withStyles } from '@material-ui/core' 
import Slider from '@material-ui/lab/Slider'

const styles = () => ({
    slider: {
        width: 300,
        left: '30%'
    }
})

class ColorSlider extends Component {

    state = {
        color: this.props.color,
        value: 255
    }

    handleChange = (e, value) => {
        this.setState({value})
        this.props.handleSlider(this.state)
    }

    render(){
        const { classes, color} = this.props
        const { handleChange } = this
        return <Slider className={classes.slider}
            max={255}
            min={0}
            step={1}
            value={this.state.value}
            onChange={handleChange}
        />
    }
}

export default withStyles(styles)(ColorSlider)