import React, { Component } from 'react'
import { Typography, TextField, withStyles, Button, Select, MenuItem } from '@material-ui/core';

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

class TemperatureInterval extends Component {

    state = {
        time: this.props.intervalValue
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        const { classes, temperatureInterval } = this.props
        const { handleChange } = this
        const { time } = this.state 
        return <div>
            <Typography className={classes.title}>
                Temperature
            </Typography>
            <Select onChange={handleChange}
                value={time}
                inputProps={{
                    name: 'time'
                }}
                >
                <MenuItem value={0}>--None--</MenuItem>
                <MenuItem value={30}>30 Seconds</MenuItem>
                <MenuItem value={60}>1 Minute</MenuItem>
                <MenuItem value={1800}>30 Minutes</MenuItem>
                <MenuItem value={3600}>60 Minutes</MenuItem>
            </Select>
            <Button onClick={() => temperatureInterval(time)}>Set</Button>
        </div>
    }
}

export default withStyles(styles)(TemperatureInterval)