import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { Button } from '@material-ui/core'; 
import { connect } from 'react-redux'

import { setPage } from '../actions/actions'

import MainTitle from './components/MainTitle'
import Title from './components/Title'
import { Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



class NavBar extends Component {

    state = {
        anchorEl: null
    }

    handleClick = e => {
        this.setState({anchorEl: e.currentTarget})
    }

    handleClose = () => {
        this.setState({anchorEl: null})
    }

    handleSelected = e => {
        if(e.target.value === 0){
            this.props.setPage('/controller')
        } else {
            this.props.setPage('/dashboard')
        }
        this.props.redirect()
    }

    render(){
        const { username, logOut, page} = this.props
        const {handleClick} = this
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)
        return( <div>
                { username ? 
                <AppBar style={{backgroundColor: '#004857'}}
                    showMenuIconButton={false}>
                    <Toolbar className={'navMenu'}>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon onClick={handleClick} />
                        </IconButton>
                        <Menu id='menu-appbar'
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                              }}
                              open={open}
                              onClose={this.handleClose}
                            >
                            <MenuItem onClick={this.handleSelected} value={0}>Controller</MenuItem>
                            <MenuItem onClick={this.handleSelected} value={1}>Dashboard</MenuItem>
                        </Menu>

                    </Toolbar>
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

const mapStateToProps = state => {
    return {
      page: state.page
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      setPage: page => dispatch(setPage(page))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
{/* <AppBar
                    style={{
                    backgroundColor: '#004857'}}
                    onClick={handleClick}
                >
                    <Title title={page}/>
                    <Button style={{color: 'white'}} onClick={logOut}>LogOut</Button>
                </AppBar> */}