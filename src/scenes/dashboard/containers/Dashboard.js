import React, { Component } from 'react'
import { connect } from 'react-redux'

import Environment from './Environment'
import { setHome, setBoards} from '../../../actions/actions'
import API from '../../../APIs/API'

class Dashboard extends Component {

    componentDidMount() {
        API.getEnvironment(localStorage.username)
            .then(data => {
                this.props.setHome(data.name)
                this.props.setBoards(data.boards)
            })
    }

    render(){
        return <div>
            <Environment home={this.props.home} boards={this.props.boards}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)