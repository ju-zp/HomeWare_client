import React, { Component } from 'react'

import { Tabs, Tab } from '@material-ui/core'

import API from '../../../APIs/API'


class Environment extends Component {

    constructor(props){
        super()
        // console.log(props.boards)
    }

    state = {
        value: 0
    }

    handleChange = (e, value) => {
        this.setState({value})
    }

    renderBoardInfo = value => {
        const lights = this.props.boards[value].lights
        const temperatures = this.props.boards[value].temperatures
        return <div>
            <h3>Lights ({lights.length}): </h3>
            <ol>
                {lights.map(l => <li>Status:{l.switched_on? " on":" off"}</li>)}
            </ol>
            <h3>Tmperature Senors ({temperatures.length}):</h3>
            <ol>
                {temperatures.map(t => <li>Interval: {t.interval} seconds</li>)}
            </ol>
        </div>
    }

    render(){
        const { handleChange } = this
        const { value } = this.state
        return <div className='environment'>  
            <h1>{this.props.home}</h1>
            <h1>Connected devices:</h1>
            <Tabs value={value} onChange={handleChange}>
            {this.props.boards.map(board => <Tab label={board.name}/>)}
            </Tabs>
            {value === 0 &&  this.props.boards[value] ? this.renderBoardInfo(value): null}
        </div>
    }
}

export default Environment