import React, { Component } from 'react'

import LightSwitch from '../components/LightSwitch';
import ColorSettings from '../components/ColorSettings';
import TemperatureInterval from '../components/TemperatureInterval';
import AmbientSwitch from '../components/AmbientSwitch';
import HardwareAPI from '../../../APIs/HardwareAPI'
import API from '../../../APIs/API'


class Controller extends Component {

    state = {
        on: false,
        color: {
            red: 255,
            green: 255,
            blue: 255
        },
        interval: null,
        intervalVal: 0, 
        save: false
    }

    componentWillUnmount(){
        clearInterval(this.state.interval)
    }

    handleSwitch = (val) => {
        this.setState({on: val})
        if(val){
            HardwareAPI.setColor(this.state.color)
        } else {
            HardwareAPI.switchOff()
        } 
    } 

    handleSlider = data => {
        this.setState({color: {...this.state.color,[data.color]: data.value}})
        if(this.state.on){
            HardwareAPI.setColor(this.state.color)
        }
    }

    handleTemperatureInterval = time => {
        this.setState({interval: setInterval(() => {
            HardwareAPI.getTemperature()
                .then(data => API.sendReading(localStorage.username, data.reading))
            }, time * 1000),
            intervalVal: time})
    }

    handleSaveClick = () => {
        console.log('hello')
        this.setState({save: true})
    }

    handleSave = () => {
        console.log('save')
        this.setState({save: false})
    }

    render(){
        const { handleSwitch, handleSlider, handleTemperatureInterval, handleSaveClick, handleSave } = this
        const { intervalVal, save } = this.state
        return <div className="controller">
            <LightSwitch handleSwitch={handleSwitch}/>
            <ColorSettings handleSlider={handleSlider}
                handleSave={handleSaveClick}
                showSave={save}
                save={handleSave}/>
            <TemperatureInterval intervalValue={intervalVal} 
                temperatureInterval={handleTemperatureInterval}/>
            <AmbientSwitch/>

        </div>
    }
}

export default Controller