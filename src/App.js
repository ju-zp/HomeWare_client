import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import NavBar from './navigation/NavBar'
import Landing from './scenes/landing/containers/Landing'
import Login from './scenes/login/Login'
import Controller from './scenes/controller/containers/Controller'



class App extends Component {

  state = {
    username: ''
  }


  logIn = username => {
    localStorage.setItem('username', username)
    this.setState({ username })
  }

  logOut = () => {
    localStorage.removeItem('username')
    this.setState({ username: '' })
    this.props.history.push('/')
  }
 
  componentDidMount(){
    const username = localStorage.username
    if(username){
      this.props.history.push('/controller')
      // API.validate(username)
      //   .then(resp => {
      //     if(!resp.error){
      //       this.logIn(username)
      //       this.props.history.push('/news')
      //     }
      //   })
    } else{
      this.props.history.push('/')
    }
  }

  render() {
    const { logIn, logOut, props } = this
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Route exact path='/' component={() => <Landing {...props} logIn={logIn}/>}/>
          <Route exact path='/login' component={() => <Login {...props} logIn={logIn}/>}/>
          <Route exact path='/controller' component={() => <Controller  />}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
