import React, { Component } from 'react'
import { connect } from 'react-redux'

import Environment from '../components/Environment'
import { setHome, setBoards} from '../../../actions/actions'
import API from '../../../APIs/API'

class Dashboard extends Component {

    componentDidMount() {
        API.getEnvironment(localStorage.username)
            .then(data => {
                // console.log(data.boards[0].lights[0].switched_on)
                this.props.setHome(data.name)
                this.props.setBoards(data.boards)
            })
    }

    render(){
        {this.props.boards[0]?console.log(this.props.boards[0]): console.log("null")}
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