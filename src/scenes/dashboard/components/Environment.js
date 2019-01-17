import React, { Component } from 'react'

import { Tabs, Tab } from '@material-ui/core'

import API from '../../../APIs/API'


class Environment extends Component {

    state = {
        value: 0
    }

    handleChange = (e, value) => {
        this.setState({value})
    }

    render(){
        console.log(this.props)
        const { handleChange } = this
        const { value } = this.state
        return <div className='environment'>  
            <h1>{this.props.home}</h1>
            <h1>Connected devices:</h1>
            <Tabs value={value} onChange={handleChange}>
            {this.props.boards.map(board => <Tab label={board}/>)}
            </Tabs>
            {value === 0 && <h1>this </h1>}
        </div>
    }
}

export default Environment