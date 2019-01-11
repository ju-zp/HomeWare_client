import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import { Link } from 'react-router-dom'
import { FormControl, TextField, Button } from '@material-ui/core'; 

import Title from './components/Title'

class NavBar extends Component {

    render(){
        const { logout} = this.props
        return( <div>
                <AppBar
                    showMenuIconButton={false}
                    style={{backgroundColor: '#004857'}}
                    >
                    <Title />
                </AppBar>
            </div>
        )
    }
}

export default NavBar

{/* <AppBar
                    showMenuIconButton={false}
                    style={{
                    backgroundColor: '#004857'}}
                >
                    <Button onClick={logout}>LogOut</Button>
                </AppBar> */}