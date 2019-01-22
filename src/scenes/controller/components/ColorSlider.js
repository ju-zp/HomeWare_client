import React, { Component } from'react'
import { connect } from 'react-redux'

import { setColor } from '../../../actions/actions'

import { withStyles } from '@material-ui/core' 
import Slider from '@material-ui/lab/Slider'

const styles = () => ({
    slider: {
       
        left: '30%'
    }
})

class ColorSlider extends Component {

    render(){
        const { classes, colorName, handleSlider } = this.props
        return <Slider className={classes.slider}
            max={255}
            min={0}
            step={1}
            value={this.props.color[colorName]}
            onChange={(e, value) => handleSlider({color: colorName, value: value})
            }
        />
    }
}

const mapStateToProps = state => {
    return {
        color: state.color
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setColor: color => dispatch(setColor(color))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ColorSlider))