import React, { Component } from 'react'
import API from '../../../APIs/API';

class Users extends Component{

    componentDidMount() {
        // console.log(this.props)
        // API.getUsers(this.props.home.id)
    }
    render(){
        return <div className='usersContainer'>
            <h3>Users: </h3>
            <ul>
                {this.props.users.map(u => <li>{u}</li>)}
            </ul>
        </div>
    }
}

export default Users
