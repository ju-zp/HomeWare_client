import React, { Component } from 'react'
import { connect } from 'react-redux'
import Skycons from 'react-skycons'

import { Typography, withStyles } from '@material-ui/core'

const styles = {
    title: {
        fontSize: '25px',
        color: '#004857',
        marginLeft: '5%',
        marginTop: '2%'
    },
    listItem: {
        fontSize: '15px',
        color: '#004857',
        listStyleType: 'none'
    }, 
    link: {
        fontSize: '20px',
        color: '#004857',
        marginLeft: '5%',
        marginTop: '2%'
    }
}

class Weather extends Component {

    parseIcon = str => {
        return str.replace(/-/g, '_').toUpperCase()
    }

    render(){
        const { currently } = this.props.weather
        const { classes } = this.props
        return <div className='weatherContainer'>
        {currently ? 
            <div className='weatherContent'>
                <Typography className={classes.title}>
                    Weather
                </Typography>
                <br></br>
                <Typography className={classes.title}>
                    Summary:
                </Typography>
                <ul>
                    <li className={classes.listItem}>
                        {currently.summary}
                    </li>
                </ul>
                <Typography className={classes.title}>
                    Temperature:
                </Typography>
                <ul>
                    <li className={classes.listItem}>
                        Actual: {currently.temperature}C
                    </li>
                    <li className={classes.listItem}>
                        Feels like: {currently.apparentTemperature}C
                    </li>
                </ul>
                <Typography className={classes.title}>
                    Humidity:
                </Typography>
                <ul>
                    <li className={classes.listItem}>
                        {currently.humidity}%
                    </li>
                </ul>
                <Typography className={classes.title}>
                    Visibility:
                </Typography>
                <ul>
                    <li className={classes.listItem}>
                        {currently.visibility} KM
                    </li>
                </ul>
                <a className={classes.title} 
                    href='https://darksky.net/poweredby/' 
                    target='_blank' rel="noopener noreferrer"
                    >
                    <Typography className={classes.link}>
                        Powered by Dark Sky
                    </Typography>
                </a> 
            </div>
            : null
        }
        {currently ? 
            <div className='icon'>
                <Skycons color = '#004857'
                    icon={this.parseIcon(currently.icon)}
                    autoplay={true}
                />
            </div>
            :null
        }
        </div>
    }
}

const mapStateToProps = state => {
    return{ 
        weather: state.weather
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Weather))