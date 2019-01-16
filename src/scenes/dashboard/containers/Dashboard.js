import React, { Component } from 'react'

import Environment from '../components/Environment'
import API from '../../../APIs/API'

class Dashboard extends Component {

    componentDidMount() {
        API.getEnvironment(localStorage.username)
    }

    render(){
        return <div>
            <Environment />
        </div>
    }
}

export default Dashboard