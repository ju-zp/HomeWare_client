import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Typography, withStyles } from '@material-ui/core'

import { switchOn, switchOff, setColor} from '../../../actions/actions'

import LightSwitch from '../components/LightSwitch';
import ColorSettings from '../components/ColorSettings';
import Temperature from '../components/Temperature';
import HardwareAPI from '../../../APIs/HardwareAPI'
import API from '../../../APIs/API'

const styles = {
    title: {
        fontSize: '35px',
        color: '#004857',
        textAlign: 'center'
    }
}


class Controller extends Component {

    constructor(props){
        super(props)
        this._isMounted = false
    }

    state = {
        save: false,
        colors: []
    }

    componentDidMount(){
        this._isMounted = true
        API.getColors(localStorage.username)
            .then(data => {
                if(this._isMounted){
                    this.setState({colors: data.colors})
                }})
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    handleSwitch = (val) => {
        API.setLight(val)
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

    handleSaveClick = () => {
        this.setState({save: true})
    }

    handleSave = name => {
        const color = {...this.props.color, name} 
        API.saveColor(color, localStorage.username)
            .then(data => this.setState({save: false, colors: data.colors}))
    }

    getTemperature = () => {
        HardwareAPI.getTemperature()
    }

    hideSave = () => {
        this.setState({save: false})
    }

    render(){
        const { handleSwitch, handleSlider, handleSaveClick, handleSave, getTemperature, hideSave } = this
        const { save, colors } = this.state
        const { light, classes } = this.props
        return <div className='app'>
        <div className="controller">
            <Typography className={classes.title}>Controller</Typography>
            <LightSwitch handleSwitch={handleSwitch} value={light}/>
            <ColorSettings handleSlider={handleSlider}
                colors={colors}
                handleSave={handleSaveClick}
                showSave={save}
                hideSave={hideSave}
                save={handleSave}
                />
            <Temperature getTemperature={getTemperature}/>
        </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        light: state.light,
        color: state.color,
        page: state.page
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchOn: () => dispatch(switchOn()),
        switchOff: () => dispatch(switchOff()),
        setColor: color => dispatch(setColor(color))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Controller))