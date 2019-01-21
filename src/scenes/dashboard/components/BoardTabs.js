import React, { Component } from 'react'

import BoardForm from './BoardForm'

import { Tabs, Tab, Button } from '@material-ui/core'

class BoardTabs extends Component {

    state = {
        value: 0, 
        show: false
    }

    handleChange = (e, value) => {
        this.setState({value})
    }

    handleClick = () => {
        this.setState({show: true})
    }

    hideForm = () => {
        this.setState({show: false})
        this.props.boardEdit()
        
    }

    renderBoardInfo = (value, board) => {
        const lights = this.props.boards[value].lights
        const temperatures = this.props.boards[value].temperatures
        const { handleClick, hideForm } = this
        const { show } = this.state
        return <div key={value}>
            <h3>Lights ({lights.length}): </h3>
            <ol>
                {lights.map(l => <li key={l.id}>Status:{l.switched_on? " on":" off"}</li>)}
            </ol>
            <h3>Temperature Sensors ({temperatures.length}):</h3>
            <ol>
                {temperatures.map(t => <li key={t.id}>Interval: {t.interval} seconds</li>)}
            </ol>
            {show ? <BoardForm board={board} hideForm={hideForm} /> : <Button onClick={handleClick}>Edit</Button>}
            
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
                {boards.map(board => <Tab key={board.id} label={board.name}/>)}
            </Tabs>
            {boards[0] ? 
            value === count && boards.map(b => {
                count++
                return this.renderBoardInfo(value, b)
                })
            : null}
        </div>
    }
}

export default BoardTabs