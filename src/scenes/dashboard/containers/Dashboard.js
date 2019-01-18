import React, { Component } from 'react'


import Environment from './Environment'
import Temperature from './Temperature'


class Dashboard extends Component {

    componentDidMount() {
        
    }


    render(){
        return <div>
            <Environment/>
            <Temperature/>
        </div>
    }
}



export default Dashboard