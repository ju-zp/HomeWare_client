import React, { Component } from 'react'
import { connect } from 'react-redux'


import Environment from './Environment'
import Temperature from './Temperature'
import Weather from './Weather'


class Dashboard extends Component {

    render(){
        console.log(this.props.weather)
        return <div>
            <Environment/>
            <Temperature/>
            <Weather/>
        </div>
    }
}

const mapStateToProps = state => {
    return{ 
        weather: state.weather
    }
}



export default connect(mapStateToProps)(Dashboard)