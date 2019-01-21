import React, { Component } from 'react'

import { Button } from '@material-ui/core';
import UserForm from './UserForm'
import API from '../../../APIs/API'



class Users extends Component{

    handleClick = username => {
        API.deleteUser(username)
        this.props.getUsers()
    }

    render(){
        const { handleClick } = this
        const { users, getUsers } = this.props
        return <div className='usersContainer'>
            <h3>Users: </h3>
            <ul>
                {users.map(u => <li key={u}>{u} <br></br>{u === 'admin' ? null : <Button onClick={() => handleClick(u)}>Delete</Button>}</li>)}
            </ul>
            <UserForm getUsers={getUsers}/>
        </div>
    }
}

export default Users