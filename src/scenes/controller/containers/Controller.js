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

    render(){
        return <div className="controller">
            <LightSwitch handleSwitch={this.handleSwitch}/>
            <ColorSettings/>
            <TemperatureInterval/>
            <AmbientSwitch/>

        </div>
    }
}

export default Controller