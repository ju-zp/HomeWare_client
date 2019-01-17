import React from 'react'

import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory' 

const LargeGraph = ({ data }) => {
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

export default LargeGraph