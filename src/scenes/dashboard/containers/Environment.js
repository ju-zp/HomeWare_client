import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Typography, withStyles } from '@material-ui/core'
import BoardTabs from '../components/BoardTabs'
import Users from '../components/Users'
import HomeForm from '../components/HomeForm'
import { setHome, setBoards, setUsers} from '../../../actions/actions'
import API from '../../../APIs/API'

const styles = {
    title: {
        fontSize: '35px',
        color: '#004857',
        marginLeft: '5%'
    },
    button: {
        backgroundColor: '#004E59',
        color: 'white',
        marginTop: '1%',
        marginLeft: '5%',
        '&:hover': {
            color: '#004E59',
            borderColor: '#004E59',
            backgroundColor: '#D3D3D3',
            transition: 'background-color 0.5s ease'
        }
    }
}



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
        this.setState({show: true})
    }

    handleSubmit = name => {
        this.setState({show: false})
        this.props.setHome(name)
    }

    hideForm = () => {
        this.setState({show: false})
    }

    handleBoardEdit = () => {
        API.getEnvironment(localStorage.username)
            .then(data => {
                this.props.setHome(data.name)
                this.props.setBoards(data.boards)
                this.props.setUsers(data.users)
            })
    }
        

    render(){
        const { getUsers, handleClick, handleSubmit, hideForm, handleBoardEdit } = this
        const { home, boards, users, classes } = this.props
        const { show } = this.state
        return <div className='environment'>
            <Typography className={classes.title}>{home}
            {/* <h1 className='homeTitle'>{home}</h1> */}
            {show ? 
                <HomeForm submit={handleSubmit} 
                    hideForm={hideForm}
                    /> 
                : <Button className={classes.button}
                    variant='outlined'
                    onClick={handleClick}>Edit</Button>}
            </Typography>
            <Users users={users} getUsers={getUsers}/>
            <BoardTabs boards={boards} boardEdit={handleBoardEdit}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Environment))