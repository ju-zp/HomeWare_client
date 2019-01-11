import React, { Component } from 'react'
import { Link } from 'react-router-dom' 


import SignUp from '../components/SignUp'

class Landing extends Component {

    render(){
        const { props } = this
        return <div className='app'>
            <h1 >Welcome to HomeWare</h1>
            <SignUp {...props} title={"Sign Up"}/>
            <div className="loginLink">
            <Link to='/login' activestyle={{color:'black'}}>Login</Link>
            </div>
        </div>
    }
}

export default Landing