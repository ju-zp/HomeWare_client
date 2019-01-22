import React, { Component } from 'react'

import { TextField, Button, withStyles } from '@material-ui/core'

import API from '../../../APIs/API'

const styles = {
    button: {
        backgroundColor: '#004E59',
        color: 'white',
        marginTop: '1%',
        marginRight: '1%',
        '&:hover': {
            color: '#004E59',
            borderColor: '#004E59',
            backgroundColor: '#D3D3D3',
            transition: 'background-color 0.5s ease'
        }
    }
}

class HomeForm extends Component {

    state = {
        name: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleClick = () => {
        API.editHome(this.state.name, localStorage.username)
            .then(data => this.props.submit(data.name))
    }

    render(){
        const { handleChange, handleClick } = this
        const { classes } = this.props
        return <div style={{marginLeft: "5%"}}>
            <TextField label='name'
                name='name'
                onChange={handleChange}
                />
            <br></br>
            <Button className={classes.button}
                variant='outlined' 
                onClick={handleClick}
                >
                Submit
            </Button>
            <Button className={classes.button}
                variant='outlined'
                onClick={() => this.props.hideForm()}
                >
                Cancel
            </Button>
        </div>
    }
}

export default withStyles(styles)(HomeForm)