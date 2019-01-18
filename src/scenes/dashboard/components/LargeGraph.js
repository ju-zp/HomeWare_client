import React, { Component } from 'react'

import API from '../../../APIs/API'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory' 

class LargeGraph extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        API.getTemperatureData()
            .then(data => this.setState({data: data.data}))
    }

    render(){
        const { data } = this.state 
        return <VictoryChart theme={VictoryTheme.material}>
            <VictoryAxis
                tickValues={[0,-60]}
                label='Time (minutes)'
                />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x} C`)}
            />
            <VictoryLine data={data}/>
        </VictoryChart>
    }
}

export default LargeGraph