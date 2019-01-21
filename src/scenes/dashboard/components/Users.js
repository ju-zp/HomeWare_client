import React, { Component } from 'react'

import { Button } from '@material-ui/core';
import UserForm from './UserForm'


class Users extends Component{

    handleClick = () => {
        console.log('hello')
    }

    render(){
        const { handleClick } = this 
        return <div className='usersContainer'>
            <h3>Users: </h3>
            <ul>
                {this.props.users.map(u => <li key={u}>{u}<Button onClick={() =>handleClick()}>Edit</Button></li>)}
            </ul>
            <UserForm/>
        </div>
    }
}

export default Users
