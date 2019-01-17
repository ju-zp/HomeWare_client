import React from 'react'

import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory' 

const SmallGraph = ({ data }) => {
    return <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis
            tickValues={[0,-15]}
            label='Time (minutes)'
            />
        <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x} C`)}
        />
        <VictoryLine data={data}/>
    </VictoryChart>
}

export default SmallGraph