import React, { Component } from 'react'

import Login from '../../login/Login'

class Landing extends Component {

    render(){
        const { props} = this
        return <div className='app'>
            <Login {...props} />
        </div>
    }
}

export default Landing