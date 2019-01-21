import React, { Component } from 'react'

import { TextField, Button } from '@material-ui/core'

class HomeForm extends Component {

    state = {
        name: ''
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleClick = () => {

    }

    render(){
        const { handleChange, handleClick } = this
        return <div>
            <TextField label='name'
                name='name'
                onChange={handleChange}
                />
            <Button onClick={handleClick}>Submit</Button>
            <h1>edit me boi</h1>
        </div>
    }
}

export default HomeForm