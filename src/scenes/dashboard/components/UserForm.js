import React, { Component } from 'react'

import { TextField, Button, withStyles } from '@material-ui/core'
import API from '../../../APIs/API'

const styles = {
    button: {
        backgroundColor: '#004E59',
        color: 'white',
        marginRight: '5%',
        marginTop: '2%',
        '&:hover': {
            color: '#004E59',
            borderColor: '#004E59',
            backgroundColor: '#D3D3D3',
            transition: 'background-color 0.5s ease'
        }
    }
}

class UserForm extends Component {

    state = {
        username: '',
        password: ''
    }

    handleSubmit = () => {
        API.createUser(this.state, localStorage.username)
        this.props.hideForm()
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        const { handleChange, handleSubmit } = this
        const { username, password } = this.state
        const { hideForm, classes } = this.props
        return <div>
            <TextField label='username'
                name='username'
                value={username}
                onChange={handleChange}
                />
            <br></br>
            <TextField label='password'
                type='password'
                name='password'
                value={password}
                onChange={handleChange}/>
            <br></br>
            <div style={{width: '200px'}}>
            <Button className={classes.button}
                variant='outlined'
                onClick={handleSubmit}>Submit</Button>
            <Button className={classes.button}
                variant='outlined'
                onClick={() => hideForm()}>Cancel</Button>
            </div>
        </div>
    }
}

export default withStyles(styles)(UserForm)