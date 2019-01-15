import React, { Component } from'react'
import { Typography, withStyles, Button, Select, MenuItem} from '@material-ui/core';
import ColorSlider from './ColorSlider'
import SaveForm from './SaveForm'

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

    handleChange = () => {
        console.log('hello')
    }

    render(){
        const { classes, handleSlider, handleSave, showSave, save, colors } = this.props
        return <div>
            <Typography className={classes.title}>
                Color Settings
            </Typography>
            {colors.length > 0 
                ? <Select value="color">
                    <MenuItem value="">--None--</MenuItem>
                    {colors.map(c => <MenuItem key={c.id} value={c.name}>{c.name}</MenuItem>)}
                </Select>
                : <h1>no colors</h1>}
            <Typography className={classes.text}>
                Red
            </Typography>
            <ColorSlider handleSlider={handleSlider} color="red"/>
            <Typography className={classes.text}>
                Blue
            </Typography>
            <ColorSlider handleSlider={handleSlider} color="blue"/>
            <Typography className={classes.text}>
                Green
            </Typography>
            <ColorSlider handleSlider={handleSlider} color="green"/>
            {showSave ? <SaveForm save={save}/>: <Button onClick={handleSave}>Save</Button>}
        </div>
    }
}


export default withStyles(styles)(ControllerSetting)