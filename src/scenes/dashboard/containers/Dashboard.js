import React, { Component } from 'react'
import { connect } from 'react-redux'

import Environment from '../components/Environment'
import { setHome } from '../../../actions/actions'
import API from '../../../APIs/API'

class Dashboard extends Component {

    componentDidMount() {
        API.getEnvironment(localStorage.username)
            .then(data => this.props.setHome(data.home))
    }

    render(){
        console.log(this.props.home)
        return <div>
            <Environment home={this.props.home}/>
        </div>
    }
}

const mapStateToProps = state => {
    return{
        home: state.home
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        setHome: home => dispatch(setHome(home))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)