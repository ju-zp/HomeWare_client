import React, { Component } from 'react'

import { Tabs, Tab } from '@material-ui/core'

import API from '../../../APIs/API'
import SmallGraph from '../components/SmallGraph';
import LargeGraph from '../components/LargeGraph'

class Temperature extends Component {

    state = {
        data: [],
        value: 0
    }

    componentDidMount() {
        API.getTemperatureData()
            .then(data => this.setState({data: data.data}))
    }

    onChange = (e, value) => {
        this.setState({value})
    }

    render(){
        const { data, value } = this.state
        const { onChange } = this
        const short = data.slice(data.length-30, data.length)
        return <div className='temperatureContainer'>
            <h3>Temperature:</h3>
            <Tabs value={value} onChange={onChange}>
                <Tab label='Last 15 mins'></Tab>
                <Tab label='Last hour'></Tab>
            </Tabs>
            {value === 0 &&  <SmallGraph data={short}/>}
            {value === 1 && <LargeGraph data={data}/>}
           
        </div>
    }
}

export default Temperature