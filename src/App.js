import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import NavBar from './navigation/NavBar'
import Landing from './scenes/landing/containers/Landing'
import Login from './scenes/login/Login'
import Controller from './scenes/controller/containers/Controller'
import API from './APIs/API'
import HardwareAPI from './APIs/HardwareAPI'


class App extends Component {

  state = {
    username: '',
    page: '',
    interval: null
  }


  logIn = username => {
    localStorage.setItem('username', username)
    HardwareAPI.welcome(username)
    this.setState({ username, page: 'Controller' })
  }

  logOut = () => {
    localStorage.removeItem('username')
    API.signout(this.state.username)
    HardwareAPI.logout()
    this.setState({ username: '', page: '' })
    this.props.history.push('/')
  }

  handleTemperatureInterval = time => {
    if(time === 0 && this.state.interval !== null){
      clearInterval(this.state.interval)
      this.setState({interval: null})
    } else if(time !== 0){
      HardwareAPI.getTemperature()
            .then(data => API.sendReading(localStorage.username, data.reading))
      this.setState({interval: setInterval(() => {
        HardwareAPI.getTemperature()
            .then(data => API.sendReading(localStorage.username, data.reading))
        }, time * 1000),
        intervalVal: time})
    }
}

 
  componentDidMount(){
    const username = localStorage.username
    if(username){
      API.validate(username)
        .then(resp => {
          if(!resp.error){
            this.logIn(username)
            this.setState({page: 'Controller'})
            this.props.history.push('/controller')
          }
        })
    } else{
      this.props.history.push('/')
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  render() {
    const { logIn, logOut, props, handleTemperatureInterval } = this
    const { username, page } = this.state 
    return (
      <MuiThemeProvider>
        <div>
          <NavBar username={username} logOut={logOut} page={page}/>
          <Route exact path='/' component={() => <Landing {...props} logIn={logIn}/>}/>
          <Route exact path='/login' component={() => <Login {...props} logIn={logIn}/>}/>
          <Route exact path='/controller' component={() => <Controller handleTemperatureInterval={handleTemperatureInterval} />}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return{
    interval: state.interval
  }
}

export default connect(mapStateToProps)(withRouter(App));
