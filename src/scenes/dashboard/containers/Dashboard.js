import React, { Component } from 'react'



import Environment from './Environment'
import Temperature from './Temperature'
import Weather from './Weather'


class Dashboard extends Component {

    render(){
        return <div>
            <Environment/>
            <Temperature/>
            <Weather/>
        </div>
    }
}





export default Dashboard