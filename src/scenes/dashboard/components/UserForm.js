import React, { Component } from 'react'

import { TextField, Button } from '@material-ui/core'
import API from '../../../APIs/API'

class UserForm extends Component {

    state = {
        username: '',
        password: ''
    }

    handleSubmit = () => {
        API.createUser(this.state, localStorage.username)
        this.setState({username: '', password: ''})
        this.props.hideForm()
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        const { handleChange, handleSubmit } = this
        const { username, password } = this.state
        return <div>
            <TextField label='username'
                name='username'
                value={username}
                onChange={handleChange}/>
            <br></br>
            <TextField label='password'
                type='password'
                name='password'
                value={password}
                onChange={handleChange}/>
            <br></br>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    }
}

export default UserForm