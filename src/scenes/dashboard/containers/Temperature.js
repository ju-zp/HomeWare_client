import React, { Component } from 'react'

import { Tabs, Tab } from '@material-ui/core'

import SmallGraph from '../components/SmallGraph';
import LargeGraph from '../components/LargeGraph'

class Temperature extends Component {

    state = {
        value: 0
    }

    onChange = (e, value) => {
        this.setState({value})
    }

    render(){
        const { value } = this.state
        const { onChange } = this
        return <div className='temperatureContainer'>
            <h3>Temperature</h3>
            <Tabs value={value} onChange={onChange}>
                <Tab label='Last 15 mins'></Tab>
                <Tab label='Last hour'></Tab>
            </Tabs>
            {value === 0 &&  <SmallGraph />}
            {value === 1 && <LargeGraph />}
           
        </div>
    }
}

export default Temperature