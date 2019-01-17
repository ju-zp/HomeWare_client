import React, { Component } from 'react'

import BoardTabs from './BoardTabs'



class Environment extends Component {

    render(){
    
        return <div className='environment'>  
            <h1>{this.props.home}</h1>
            <h1>Connected devices:</h1>
            <BoardTabs boards={this.props.boards}/>
        </div>
    }
}

export default Environment