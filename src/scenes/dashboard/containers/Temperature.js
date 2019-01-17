import React, { Component } from 'react'

import API from '../../../APIs/API'

class Temperature extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        API.getTemperatureData()
            .then(data => this.setState({data: data.data}))
    }

    render(){
        return <div className='temperatureContainer'>
            <h1>Temperature</h1>
        </div>
    }
}

export default Temperature