import React, { Component } from 'react'
import SignUp from '../landing/components/SignUp'



class Login extends Component {

    render(){
        const { props } = this
        return <div className='app'>
        <h1 >Welcome to HomeWare</h1>
        <SignUp {...props} title={'Log In'} />
    </div>
    }
}

export default Login