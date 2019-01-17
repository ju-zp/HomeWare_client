import React, { Component } from 'react'

import { Tabs, Tab } from '@material-ui/core'

class BoardTabs extends Component {

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
        const { value } = this.state
        const { handleChange } = this
        const { boards } = this.props
        let count = 0
        return <div className='boardTabs'>
            <h3>Connected devices ({boards.length}):</h3>
            <Tabs value={value} onChange={handleChange}>
                {boards.map(board => <Tab label={board.name}/>)}
            </Tabs>
            {boards[0] ? 
            value === count && boards.map(b => {
                count++
                return this.renderBoardInfo(value)
                })
            : null}
        </div>
    }
}

export default BoardTabs