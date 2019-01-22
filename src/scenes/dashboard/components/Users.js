import React, { Component } from 'react'

import { Button } from '@material-ui/core';
import UserForm from './UserForm'
import API from '../../../APIs/API'



class Users extends Component{

    state = {
        show: false
    }

    handleClick = username => {
        API.deleteUser(username).then(data => {
            this.props.getUsers()
        })
    }

    handleShow = () => {
        this.setState({show: true})
    }

    hideForm = () => {
        this.setState({show: false})
        this.props.getUsers()
    }

    render(){
        const { handleClick, handleShow, hideForm } = this
        const { users } = this.props
        const { show } = this.state
        return <div className='usersContainer'>
            <h3>Users: </h3>
            <ul>
                {users.map(u => <li key={u}>{u} <br></br>{u === 'admin' ? null : <Button onClick={() => handleClick(u)}>Delete</Button>}</li>)}
            </ul>
            {show ? <UserForm hideForm={hideForm}/> : <Button onClick={handleShow}>Add Users</Button>}
            
        </div>
    }
}

export default Users
