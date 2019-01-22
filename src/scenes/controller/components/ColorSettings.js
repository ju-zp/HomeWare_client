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
        color: '#004857',
        textAlign: 'center'
    },
    text: {
        fontSize: '20px',
        color: '#004857',
        marginRight: '20%'
    }, 
    button: {
        backgroundColor: '#004E59',
        color: 'white',
        marginTop: '5%',
        '&:hover': {
            color: '#004E59',
            borderColor: '#004E59',
            backgroundColor: '#D3D3D3',
            transition: 'background-color 0.5s ease'
        }
    }
})

class ColorSetting extends Component {

    state = {
        value: ""
    }

    handleChange = e => {
        let color
        if(e.target.value){
            color = {
                red: e.target.value.red,
                green: e.target.value.green,
                blue: e.target.value.blue
            }
        } else {
            color = {
                red: 255,
                green: 255,
                blue: 255
            }
        }
        this.props.setColor(color)
        if(this.props.light){
            HardwareAPI.setColor(color)
        }
        this.setState({value: e.target.value})
    }

    render(){
        const { classes, handleSlider, handleSave, showSave, save, colors, hideSave } = this.props
        const { handleChange } = this
        return <div>
            <Typography className={classes.title}>
                Color Settings
            </Typography>
            {colors.length > 0 
                ? <Select value={this.state.value}
                    onChange={e => handleChange(e)}>
                    <MenuItem value="">--None--</MenuItem>
                    {colors.map(c => <MenuItem key={c.id} value={c}>{c.name}</MenuItem>)}
                </Select>
                : null }
            <div className="sliders">
            <Typography id='label' className={classes.text}>
                Red
            </Typography>
            <ColorSlider handleSlider={handleSlider} colorName="red"/>
            <br></br>
            <Typography className={classes.text}>
                Blue
            </Typography>
            <ColorSlider handleSlider={handleSlider} colorName="blue"/>
            <br></br>
            <Typography className={classes.text}>
                Green
            </Typography>
            <ColorSlider handleSlider={handleSlider} colorName="green"/>
            </div>
            {showSave 
                ? <SaveForm save={save} hideSave={hideSave}/>
                : <Button className={classes.button} 
                    variant='outlined'
                    onClick={handleSave}
                    >Save
                </Button>}
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


export default connect(mapStateToProp, mapDispatchToProp)(withStyles(styles)(ColorSetting))