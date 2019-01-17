import React, { Component } from 'react'
import { connect } from 'react-redux'

import BoardTabs from '../components/BoardTabs'
import Users from '../components/Users'
import { setHome, setBoards} from '../../../actions/actions'
import API from '../../../APIs/API'



class Environment extends Component {

    componentDidMount() {
        API.getEnvironment(localStorage.username)
            .then(data => {
                this.props.setHome(data.name)
                this.props.setBoards(data.boards)
                console.log(data)
            })
    }

    render(){
        const { home, boards } = this.props
        // console.log(home)
        return <div className='environment'>  
            <h1 className='homeTitle'>{home}</h1>
            <Users home={home}/>
            <BoardTabs boards={boards}/>
        </div>
    }
}


const mapStateToProps = state => {
    return{
        home: state.home,
        boards: state.board
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        setHome: home => dispatch(setHome(home)),
        setBoards: boards => dispatch(setBoards(boards))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Environment)