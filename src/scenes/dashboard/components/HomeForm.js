import React, { Component } from 'react'

import { TextField, Button } from '@material-ui/core'

import API from '../../../APIs/API'

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
        return <div>
            <TextField label='name'
                name='name'
                onChange={handleChange}
                />
            <br></br>
            <Button onClick={handleClick}>Submit</Button>
            <Button onClick={() => this.props.hideForm()}>Cancel</Button>
        </div>
    }
}

export default HomeForm