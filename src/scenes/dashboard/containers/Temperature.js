import React, { Component } from 'react'

import API from '../../../APIs/API'
import SmallGraph from '../components/SmallGraph';

class Temperature extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        API.getTemperatureData()
            .then(data => this.setState({data: data.data}))
    }

    render(){
        console.log(this.state)
        return <div className='temperatureContainer'>
            <h3>Temperature:</h3>
            <SmallGraph data={this.state.data}/>
        </div>
    }
}

export default Temperature