import React, { Component } from 'react'

class BoardForm extends Component {

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
            <br></br>
            <Button onClick={handleClick}>Submit</Button>
            <Button onClick={() => this.props.hideForm()}>Cancel</Button>
        </div>
    }
}

export default BoardForm