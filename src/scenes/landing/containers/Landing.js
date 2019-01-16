import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

import SignUp from '../components/SignUp'

class Landing extends Component {

    render(){
        const { props } = this
        return <div className='app'>
            <h1 >Welcome to HomeWare</h1>
            <SignUp {...props} redirect={this.props.redirect} title={"Sign Up"}/>
            <div className="loginLink"
                onClick={() => {
                    this.props.setPage('/login')
                    this.props.redirect()}}>
            <Link to='/login' activestyle={{color:'black'}}>Login</Link>
            </div>
        </div>
    }
}

export default Landing