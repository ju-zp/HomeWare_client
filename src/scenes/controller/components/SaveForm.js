import React, { Component } from 'react'
import { FormControl, TextField, Button } from '@material-ui/core';

class SaveForm extends Component {

    state = {
        name: ''
    }

    handleChange = e => {
        console.log(e.target.value)
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