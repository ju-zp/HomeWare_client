import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { Button } from '@material-ui/core'; 

import MainTitle from './components/MainTitle'
import Title from './components/Title'


class NavBar extends Component {

    render(){
        const { username, logOut, page} = this.props
        return( <div>
                { username ?  <AppBar
                    style={{
                    backgroundColor: '#004857'}}
                >
                    <Title title={page}/>
                    <Button style={{color: 'white'}} onClick={logOut}>LogOut</Button>
                </AppBar>
                :<AppBar
                    showMenuIconButton={false}
                    style={{backgroundColor: '#004857'}}
                >
                    <MainTitle />
                </AppBar>}
                
            </div>
        )
    }
}

export default NavBar
