import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from '@material-ui/core'
import BoardTabs from '../components/BoardTabs'
import Users from '../components/Users'
import HomeForm from '../components/HomeForm'
import { setHome, setBoards, setUsers} from '../../../actions/actions'
import API from '../../../APIs/API'



class Environment extends Component {

    state = {
        show: false
    }

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

    handleClick = () => {
        console.log('hello')
    }

    render(){
        const { getUsers, handleClick } = this
        const { home, boards, users } = this.props
        const { show } = this.state
        return <div className='environment'>  
            <h1 className='homeTitle'>{home}</h1>
            <Button onClick={handleClick}>Edit</Button>
            {show ? <HomeForm/> : null}
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