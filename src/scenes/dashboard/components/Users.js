import React, { Component } from 'react'
import API from '../../../APIs/API';

class Users extends Component{

    componentDidMount() {
        API.getUsers(this.props.home)
    }
    render(){
        return <div className='usersContainer'>
            <h3>Users</h3>
        </div>
    }
}

export default Users
