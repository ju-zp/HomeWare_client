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
            })
    }

    render(){
        return <div className='environment'>  
            <h1 className='homeTitle'>{this.props.home}</h1>
            <Users/>
            <BoardTabs boards={this.props.boards}/>
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