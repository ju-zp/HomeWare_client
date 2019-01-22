import React, { Component } from 'react'
import { TextField, Button, withStyles } from '@material-ui/core';

const styles = theme => ({
    textField: {
        marginTop: '1%'
    },
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
})

class SaveForm extends Component {

    state = {
        name: '',

    }

    handleChange = e => {
        this.setState({name: e.target.value})
    }

    render(){
        const { save, classes, hideSave } = this.props
        const { handleChange } = this
        return <div>
            <TextField className={classes.textField} 
                onChange={handleChange} 
                label='name'
            />
            <br></br>
            <Button className={classes.button} 
                onClick={() => save(this.state.name)}
                variant='outlined'
                >
                Save
            </Button>
            <Button className={classes.button} 
                onClick={() => hideSave()}
                variant='outlined'
                >
                Cancel
            </Button>
        </div>
    }
    
}

export default withStyles(styles)(SaveForm)