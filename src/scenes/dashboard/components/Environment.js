import React, { Component } from 'react'

import API from '../../../APIs/API'


class Environment extends Component {

    render(){
        console.log(this.props)
        return <div className='environment'>  
            <h1>Environment</h1>
            <h1>wow</h1>
        </div>
    }
}

export default Environment