import React, { Component } from 'react'
import API from '../../../APIs/API';

class Users extends Component{

    componentDidMount() {
        // console.log(this.props)
        // API.getUsers(this.props.home.id)
    }
    render(){
        console.log(this.props.home)
        return <div className='usersContainer'>
            <h3>Users</h3>
        </div>
    }
}

export default Users
