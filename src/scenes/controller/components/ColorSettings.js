import React, { Component } from'react'
import { connect } from 'react-redux'

import { setColor } from '../../../actions/actions'
import { Typography, withStyles, Button, Select, MenuItem} from '@material-ui/core';
import ColorSlider from './ColorSlider'
import SaveForm from './SaveForm'
import HardwareAPI from '../../../APIs/HardwareAPI'

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

class ControllerSetting extends Component {

    state = {
        red: 255,
        green: 255,
        blue: 255
    }

    handleChange = e => {
        const color = {
            red: e.target.value.red,
            green: e.target.value.green,
            blue: e.target.value.blue
        }
        this.props.setColor(color)
        if(this.props.light){
            HardwareAPI.setColor(color)
        }
    }

    render(){
        const { classes, handleSlider, handleSave, showSave, save, colors } = this.props
        const { handleChange } = this
        return <div>
            <Typography className={classes.title}>
                Color Settings
            </Typography>
            {colors.length > 0 
                ? <Select value="color"
                    onChange={e => handleChange(e)}>
                    <MenuItem value="">--None--</MenuItem>
                    {colors.map(c => <MenuItem key={c.id} value={c}>{c.name}</MenuItem>)}
                </Select>
                : <h1>no colors</h1>}
            <Typography className={classes.text}>
                Red
            </Typography>
            <ColorSlider handleSlider={handleSlider} colorName="red"/>
            <Typography className={classes.text}>
                Blue
            </Typography>
            <ColorSlider handleSlider={handleSlider} colorName="blue"/>
            <Typography className={classes.text}>
                Green
            </Typography>
            <ColorSlider handleSlider={handleSlider} colorName="green"/>
            {showSave ? <SaveForm save={save}/>: <Button onClick={handleSave}>Save</Button>}
        </div>
    }
}

const mapStateToProp = state => {
    return {
        light: state.light,
        color: state.color
    }
}

const mapDispatchToProp = dispatch => {
    return {
        setColor: color => dispatch(setColor(color))
    }
}


export default connect(mapStateToProp, mapDispatchToProp)(withStyles(styles)(ControllerSetting))