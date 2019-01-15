import React, { Component } from 'react'
import { FormControl, TextField, Button } from '@material-ui/core';

class SaveForm extends Component {

    state = {
        name: ''
    }
    
    render(){
        const { save } = this.props 
        return <div>
            <TextField label='name'/>
            <Button onClick={save}>Save</Button>
        </div>
    }
    
}

export default SaveForm