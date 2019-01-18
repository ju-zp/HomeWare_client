import React, { Component } from 'react'

import API from '../../../APIs/API'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory' 

class LargeGraph extends Component {

    constructor(props){
        super(props)
        this._isMounted = false
    }

    state = {
        data: []
    }

    componentDidMount() {
        this._isMounted = true
        API.getTemperatureData()
            .then(data => {
                if(this._isMounted){
                    this.setState({data: data.data})
                }})
    }

    componentWillUnmount() {
        this._isMounted = false
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