import React, { Component } from 'react'
import { connect } from 'react-redux'
import Skycons from 'react-skycons'

class Weather extends Component {

    parseIcon = str => {
        return str.replace(/-/g, '_').toUpperCase()
    }

    renderWeather = () => {
        const { currently } = this.props.weather
        return <div>
            <div className='weatherContent'>
                <h4>Summary:</h4>
                <ul><li><h4>{currently.summary}</h4></li></ul>
                <h4>Temperature:</h4>
                <ul>
                    <li><h4>Actual: {currently.temperature}C</h4></li>
                    <li><h4>Feels like: {currently.apparentTemperature}C</h4></li>
                </ul>
                <h4>Humidity:</h4>
                <ul><li><h4>{currently.humidity}%</h4></li></ul>
                <h4>Visibility:</h4>
                <ul><li><h4>{currently.visibility} KM</h4></li></ul>
                <a href='https://darksky.net/poweredby/' target='_blank' rel="noopener noreferrer"><h4>Powered by Dark Sky</h4></a>
                
            </div>
            <div className='icon'>
                <Skycons color='black'
                    icon={this.parseIcon(currently.icon)}
                    autoplay={true}
                />
            </div>
        </div>
    }

    render(){
        console.log(this.props)
        return <div className='weatherContainer'>
            <h3>Weather:</h3>
            {this.props.weather.currently 
            ? this.renderWeather()
            : null}
            
        </div>
    }
}

const mapStateToProps = state => {
    return{ 
        weather: state.weather
    }
}

export default connect(mapStateToProps)(Weather)