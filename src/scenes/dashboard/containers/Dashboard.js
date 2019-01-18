import React, { Component } from 'react'
import { connect } from 'react-redux'


import Environment from './Environment'
import Temperature from './Temperature'


class Dashboard extends Component {

    render(){
        console.log(this.props.weather)
        return <div>
            <Environment/>
            <Temperature/>
        </div>
    }
}

const mapStateToProps = state => {
    return{ 
        weather: state.weather
    }
}



export default connect(mapStateToProps)(Dashboard)