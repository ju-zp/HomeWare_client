import React, { Component } from 'react'

import BoardTabs from '../components/BoardTabs'
import Users from '../components/Users'



class Environment extends Component {

    render(){
        return <div className='environment'>  
            <h1>{this.props.home}</h1>
            <Users/>
            <BoardTabs boards={this.props.boards}/>
        </div>
    }
}

export default Environment