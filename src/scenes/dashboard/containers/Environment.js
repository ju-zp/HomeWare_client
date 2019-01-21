import React, { Component } from 'react'
import { connect } from 'react-redux'

import BoardTabs from '../components/BoardTabs'
import Users from '../components/Users'
import { setHome, setBoards, setUsers} from '../../../actions/actions'
import API from '../../../APIs/API'



class Environment extends Component {

    componentDidMount() {
        API.getEnvironment(localStorage.username)
            .then(data => {
                this.props.setHome(data.name)
                this.props.setBoards(data.boards)
                this.props.setUsers(data.users)
            })
    }

    getUsers = () => {
        API.getEnvironment(localStorage.username)
            .then(data => this.props.setUsers(data.users))
    }

    render(){
        const { getUsers } = this
        const { home, boards, users } = this.props
        return <div className='environment'>  
            <h1 className='homeTitle'>{home}</h1>
            <Users users={users} getUsers={getUsers}/>
            <BoardTabs boards={boards}/>
        </div>
    }
}


const mapStateToProps = state => {
    return{
        home: state.home,
        boards: state.board,
        users: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        setHome: home => dispatch(setHome(home)),
        setBoards: boards => dispatch(setBoards(boards)),
        setUsers: users => dispatch(setUsers(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Environment)