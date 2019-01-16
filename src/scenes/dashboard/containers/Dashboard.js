import React, { Component } from 'react'
import { connect } from 'react-redux'

import Environment from '../components/Environment'
import { setHome, setBoards } from '../../../actions/actions'
import API from '../../../APIs/API'

class Dashboard extends Component {

    componentDidMount() {
        API.getEnvironment(localStorage.username)
            .then(data => {this.props.setHome(data.home)
                this.props.setBoards(data.boards)
            })
    }

    render(){
        console.log(this.props.home)
        return <div>
            <Environment home={this.props.home} boards={this.props.board}/>
        </div>
    }
}

const mapStateToProps = state => {
    return{
        home: state.home,
        board: state.board
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        setHome: home => dispatch(setHome(home)),
        setBoards: boards => dispatch(setBoards(boards))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)