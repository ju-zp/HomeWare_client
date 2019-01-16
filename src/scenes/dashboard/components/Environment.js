import React, { Component } from 'react'

import API from '../../../APIs/API'


class Environment extends Component {

    render(){
        console.log(this.props)
        return <div className='environment'>  
            <h1>{this.props.home}</h1>
            <h1>Connected devices:</h1>
            <ul>
                {this.props.boards.map(board => <li>{board}</li>)}
            </ul>
        </div>
    }
}

export default Environment