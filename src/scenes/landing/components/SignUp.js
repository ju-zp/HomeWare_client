import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { FormControl, TextField, Button } from '@material-ui/core';

import API from '../../../APIs/API'

const styles = () => ({
    text: {
        color: '#004E59',
        
    },
    button: {
        backgroundColor: '#004E59',
        color: 'white',
        marginTop: '5%',
        '&:hover': {
            color: '#004E59',
            borderColor: '#004E59',
            backgroundColor: '#D3D3D3',
            transition: 'background-color 0.5s ease'
        }
    }
})

class SignUp extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleLogIn = async e => {
        let resp
        if(this.props.title === 'Log In'){
            resp = await API.login(this.state)
        } else {
            resp = await API.signup(this.state)
        }
        if(resp.error){
          console.log(resp.error)
        } else {
            this.props.logIn(this.state.username)
            this.props.setPage('/controller')
            this.props.redirect()
            console.log("success")
        }
      }

    render(){
        const { classes} = this.props
        const { handleChange, handleLogIn } = this
        const { title} = this.props
        return <div className='form'>
            <p className={classes.text}>{title}</p>
            <FormControl fullWidth={true}>
                <TextField label='username'
                    name='username'
                    margin='dense'
                    onChange={handleChange}/>
                <TextField label='password'
                    name='password'
                    type='password' 
                    margin='dense'
                    onChange={handleChange}/>
                <Button variant='outlined' 
                    className={classes.button}
                    onClick={handleLogIn}>Submit</Button>
            </FormControl>
            
        </div>
    }
}



export default withStyles(styles)(SignUp)