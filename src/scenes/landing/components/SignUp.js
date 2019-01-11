import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';



import { FormControl, TextField, Button } from '@material-ui/core';

const styles = () => ({
    button: {
        backgroundColor: '#004E59',
        color: 'white',
        marginTop: '5%',
        '&:hover': {
            background: '#004857'
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
        // const resp = await API.login(this.state)
        // if(resp.error){
        //   console.log(resp.error)
        // } else {
            this.props.logIn(this.state.username)
            this.props.history.push('/controller')
          console.log("success")
        // }
      }

    render(){
        const { classes} = this.props
        const { handleChange, handleLogIn } = this
        const { title} = this.props
        return <div className='form'>
            <p>{title}</p>
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