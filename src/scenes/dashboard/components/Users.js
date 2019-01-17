import React, { Component } from 'react'


class Users extends Component{

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
