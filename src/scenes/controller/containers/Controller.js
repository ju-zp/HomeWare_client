import React, { Component } from 'react'
import { Typography, Switch } from '@material-ui/core'

import LightSwitch from '../components/LightSwitch';
import ColorSettings from '../components/ColorSettings';
import TemperatureInterval from '../components/TemperatureInterval';
import AmbientSwitch from '../components/AmbientSwitch';
import HardwareAPI from '../../../APIs/HardwareAPI'


class Controller extends Component {

    state = {
        light: false
    }

    handleSwitch = (val) => {
        if(val){
            HardwareAPI.switchOn()
        } else {
            HardwareAPI.switchOff()
        } 
    } 

    handleSlider = data => {
        console.log(data)
    }

    render(){
        const { handleSwitch, handleSlider } = this 
        return <div className="controller">
            <LightSwitch handleSwitch={handleSwitch}/>
            <ColorSettings handleSlider={handleSlider}/>
            <TemperatureInterval/>
            <AmbientSwitch/>

        </div>
    }
}

export default Controller