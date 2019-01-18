import React, { Component } from 'react'

import API from '../../../APIs/API'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory' 

class SmallGraph extends Component {

    state = {
        data: [],
    }

    componentDidMount() {
        API.getTemperatureData()
            .then(data => {
                if(this.state.isMounted){
                this.setState({data: data.data})
                }
            })
    }

    componentWillUnmount(){
        this.setState({isMounted: false})
    }

    render(){
        const { data } = this.state
        return <VictoryChart theme={VictoryTheme.material}>
            <VictoryAxis
                tickValues={[0,-15]}
                label='Time (minutes)'
            />
            <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x} C`)}
            />
            <VictoryLine data={data.slice(data.length-30, data.length)}/>
        </VictoryChart>
    }
}

export default SmallGraph