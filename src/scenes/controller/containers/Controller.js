import React, { Component } from 'react'
import { connect } from 'react-redux'

import { switchOn, switchOff } from '../../../actions/actions'

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
        save: false,
        colors: []
    }

    componentDidMount(){
        console.log(this.props)
        API.getColors(localStorage.username)
            .then(data => this.setState({colors: data.colors}))
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
        this.setState({save: true})
    }

    handleSave = name => {
        const color = {...this.state.color, name} 
        API.saveColor(color, localStorage.username)
        this.setState({save: false, colors: API.getColors(localStorage.username)})
    }

    render(){
        const { handleSwitch, handleSlider, handleTemperatureInterval, handleSaveClick, handleSave } = this
        const { intervalVal, save, colors } = this.state
        return <div className="controller">
            <LightSwitch handleSwitch={handleSwitch}/>
            <ColorSettings handleSlider={handleSlider}
                colors={colors}
                handleSave={handleSaveClick}
                showSave={save}
                save={handleSave}
                />
            <TemperatureInterval intervalValue={intervalVal} 
                temperatureInterval={handleTemperatureInterval}/>
            <AmbientSwitch/>

        </div>
    }
}

const mapStateToProps = state => {
    return {
        light: state.light
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchOn: () => dispatch(switchOn),
        switchOff: () => dispatch(switchOff)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller)