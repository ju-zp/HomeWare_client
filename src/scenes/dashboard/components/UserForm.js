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
        this.props.getUsers()
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        const { handleChange, handleSubmit } = this
        return <div>
            <h3>Add user:</h3>
            <TextField label='username'
                name='username'
                onChange={handleChange}/>
            <TextField label='password'
                name='password'
                onChange={handleChange}/>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    }
}

export default UserForm