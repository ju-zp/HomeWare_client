import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import NavBar from './navigation/NavBar'
import Landing from './scenes/landing/containers/Landing'
import Login from './scenes/login/Login'
import Controller from './scenes/controller/containers/Controller'
import API from './API'


class App extends Component {

  state = {
    username: '',
    page: ''
  }


  logIn = username => {
    localStorage.setItem('username', username)
    this.setState({ username, page: 'Controller' })
  }

  logOut = () => {
    localStorage.removeItem('username')
    this.setState({ username: '', page: '' })
    this.props.history.push('/')
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

  render() {
    const { logIn, logOut, props } = this
    const { username, page } = this.state 
    return (
      <MuiThemeProvider>
        <div>
          <NavBar username={username} logOut={logOut} page={page}/>
          <Route exact path='/' component={() => <Landing {...props} logIn={logIn}/>}/>
          <Route exact path='/login' component={() => <Login {...props} logIn={logIn}/>}/>
          <Route exact path='/controller' component={() => <Controller  />}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
