import React, { Component } from 'react'
import { connect } from 'react-redux'

import { switchOn, switchOff, setColor, setInterval } from '../../../actions/actions'

import LightSwitch from '../components/LightSwitch';
import ColorSettings from '../components/ColorSettings';
import TemperatureInterval from '../components/TemperatureInterval';
import AmbientSwitch from '../components/AmbientSwitch';
import HardwareAPI from '../../../APIs/HardwareAPI'
import API from '../../../APIs/API'


class Controller extends Component {

    state = {
        interval: null,
        intervalVal: 0, 
        save: false,
        colors: []
    }

    componentDidMount(){
        API.getColors(localStorage.username)
            .then(data => this.setState({colors: data.colors}))
    }

    componentWillUnmount(){
        clearInterval(this.state.interval)
    }

    handleSwitch = (val) => {
        if(val){
            this.props.switchOn()
            HardwareAPI.setColor(this.props.color)
        } else {
            this.props.switchOff()
            HardwareAPI.switchOff()
        } 
    } 

    handleSlider = data => {
        this.props.setColor({...this.props.color, [data.color]: data.value})
        if(this.props.light){
            HardwareAPI.setColor(this.props.color)
        }
    }

    handleTemperatureInterval = time => {
        this.props.setInterval(setInterval(() => {
            console.log('hello')
        }, 1000))
        // this.setState({interval: setInterval(() => {
        //     HardwareAPI.getTemperature()
        //         .then(data => API.sendReading(localStorage.username, data.reading))
        //     }, time * 1000),
        //     intervalVal: time})
    }

    handleSaveClick = () => {
        this.setState({save: true})
    }

    handleSave = name => {
        const color = {...this.props.color, name} 
        console.log(color)
        API.saveColor(color, localStorage.username)
        this.setState({save: false, colors: API.getColors(localStorage.username)})
    }

    render(){
        const { handleSwitch, handleSlider, handleTemperatureInterval, handleSaveClick, handleSave } = this
        const { intervalVal, save, colors } = this.state
        const { light } = this.props
        return <div className="controller">
            <LightSwitch handleSwitch={handleSwitch} value={light}/>
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
        light: state.light,
        color: state.color,
        interval: state.interval
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchOn: () => dispatch(switchOn()),
        switchOff: () => dispatch(switchOff()),
        setColor: color => dispatch(setColor(color))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller)