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

class BoardForm extends Component {

    state = {
        name: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleClick = () => {
        API.editBoard(this.state.name, this.props.board.id)
            .then(data => this.props.hideForm())
        
    }

    render(){
        const { handleChange, handleClick } = this
        const { classes } = this.props
        return <div>
            <TextField label='name'
                name='name'
                onChange={handleChange}
                />
            <br></br>
            <Button className={classes.button} variant='outlined'onClick={handleClick}>Submit</Button>
            <Button className={classes.button} variant='outlined'onClick={() => this.props.hideForm()}>Cancel</Button>
        </div>
    }
}

export default withStyles(styles)(BoardForm)