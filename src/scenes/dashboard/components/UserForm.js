import React, { Component } from 'react'

import { TextField, Button, FormControl } from '@material-ui/core'

class UserForm extends Component {

    state = {
        username: '',
        password: ''
    }

    handleSubmit = () => {

    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        const { handleChange } = this
        return <div>
            <h3>Add user:</h3>
            <TextField label='username'
                name='username'
                onChange={handleChange}/>
            <TextField label='password'
                name='password'
                onChange={handleChange}/>
            <Button>Submit</Button>
        </div>
    }
}

export default UserForm