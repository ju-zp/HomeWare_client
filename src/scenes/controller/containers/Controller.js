import React, { Component } from 'react'
import { Typography, Switch } from '@material-ui/core'

import LightSwitch from '../components/LightSwitch';
import ColorSettings from '../components/ColorSettings';
import TemperatureInterval from '../components/TemperatureInterval';
import AmbientSwitch from '../components/AmbientSwitch';


class Controller extends Component {

    render(){
        return <div className="controller">
            <LightSwitch/>
            <ColorSettings/>
            <TemperatureInterval/>
            <AmbientSwitch/>

        </div>
    }
}

export default Controller