import React, { Component } from 'react'
import { FormControl, TextField, Button } from '@material-ui/core';

class SaveForm extends Component {

    state = {
        name: ''
    }

    handleChange = () => {
        console.log('hello')
    }

    render(){
        const { save } = this.props
        const { handleChange } = this
        return <div>
            <TextField onChange={handleChange} label='name'/>
            <Button onClick={save}>Save</Button>
        </div>
    }
    
}

export default SaveForm