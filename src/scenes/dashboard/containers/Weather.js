import React, { Component } from 'react'
import { connect } from 'react-redux'

class Weather extends Component {
    render(){
        console.log(this.state)
        return <div className='weatherContainer'>
            <h3>Weather</h3>
        </div>
    }
}

const mapStateToProps = state => {
    return{ 
        weather: state.weather
    }
}

export default connect(mapStateToProps)(Weather)