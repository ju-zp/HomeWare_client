import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { setPage, setWeather } from './actions/actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import NavBar from './navigation/NavBar'
import Landing from './scenes/landing/containers/Landing'
import Login from './scenes/landing/components/Login'
import Controller from './scenes/controller/containers/Controller'
import Dashboard from './scenes/dashboard/containers/Dashboard'

import API from './APIs/API'
import HardwareAPI from './APIs/HardwareAPI'


class App extends Component {

  state = {
    username: '',
    interval: null,
    redirect: false
  }


  logIn = username => {
    localStorage.setItem('username', username)
    HardwareAPI.welcome(username)
    this.setState({ username })
  }

  logOut = () => {
    localStorage.removeItem('username')
    HardwareAPI.logout()
    API.setLight(false)
    this.setState({ username: ''})
    this.props.history.push('/')
  }

  handleRedirect = () => {
    this.setState({redirect: true})
  }

  cancelRedirect = () => {
    this.setState({redirect: false})
  }
 
  componentDidMount(){
    API.getWeather()
      .then(data => this.props.setWeather(data.weather))
    HardwareAPI.switchOff()
    API.setLight(false)
    this.setState({interval: setInterval(() => {
      if(localStorage.username){
        HardwareAPI.getTemperature()
          .then(data => API.sendReading(localStorage.username, data.reading))
      }
    }, 30000)})
    const username = localStorage.username
    if(username){
      API.validate(username)
        .then(resp => {
          if(!resp.error){
            this.logIn(username)
            this.props.setPage('/dashboard')
            this.setState({ redirect: true })
          }
        })
    } 
    else{
      this.props.history.push('/')
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  render() {
    const { logIn, logOut, props, handleTemperatureInterval, handleRedirect } = this
    const { username } = this.state 
    if(this.state.redirect){
      this.props.history.push(this.props.page)
      this.cancelRedirect()
    }
    return (
      <MuiThemeProvider>
        <div>
          <NavBar username={username} logOut={logOut} page={this.props.page} redirect={handleRedirect}/>
          <Route exact path='/' component={() => <Landing {...props} logIn={logIn} redirect={handleRedirect}/>}/>
          <Route exact path='/controller' component={() => <Controller {...props} handleTemperatureInterval={handleTemperatureInterval} />}/>
          <Route exact path='/dashboard' component={() => <Dashboard {...props}/>}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    page: state.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPage: page => dispatch(setPage(page)),
    setWeather: weather => dispatch(setWeather(weather))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
