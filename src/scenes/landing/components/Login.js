import React, { Component } from 'react'
import SignUp from './SignUp'



class Login extends Component {

    render(){
        const { props } = this
        return <div className='app'>
        <h1>Levelling up you home</h1>
        <SignUp {...props} title={'Log In'} />
    </div>
    }
}

export default Login