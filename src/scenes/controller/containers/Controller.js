import React, { Component } from 'react'
import { Typography, Switch } from '@material-ui/core'

import LightSwitch from '../components/LightSwitch';
import ColorSettings from '../components/ColorSettings';
import TemperatureInterval from '../components/TemperatureInterval';
import AmbientSwitch from '../components/AmbientSwitch';
import HardwareAPI from '../../../APIs/HardwareAPI'


class Controller extends Component {

    state = {
        on: false,
        red: 255,
        green: 255,
        blue: 255
    }

    handleSwitch = (val) => {
        this.setState({on: val})
        if(val){
            HardwareAPI.setColor(this.state)
        } else {
            HardwareAPI.switchOff()
        } 
    } 

    handleSlider = data => {
        this.setState({[data.color]: data.value})
        if(this.state.on){
            HardwareAPI.setColor(this.state)
        }
    }

    handleTemperature = () => {
        console.log("hello")
        HardwareAPI.getTemperature()
    }

    render(){
        const { handleSwitch, handleSlider, handleTemperature } = this 
        return <div className="controller">
            <LightSwitch handleSwitch={handleSwitch}/>
            <ColorSettings handleSlider={handleSlider}/>
            <TemperatureInterval handleTemperature={handleTemperature}/>
            <AmbientSwitch/>

        </div>
    }
}

export default Controller