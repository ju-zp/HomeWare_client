import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { Button } from '@material-ui/core'; 
import { connect } from 'react-redux'

import { setPage } from '../actions/actions'

import MainTitle from './components/MainTitle'
import Title from './components/Title'
import { Toolbar, IconButton, Menu, MenuItem, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    menuButton: {
        color: 'white',
        '&:hover': {
            color: '#004E59',
            borderColor: '#004E59',
            backgroundColor: '#D3D3D3',
            transition: 'background-color 0.5s ease'
        }
    },
    button: {
        backgroundColor: '#004857',
        color: 'white',
        marginRight: '5%',
        '&:hover': {
            color: '#004E59',
            borderColor: '#004E59',
            backgroundColor: '#D3D3D3',
            transition: 'background-color 0.5s ease'
        }
    },
    selected: {
        color: '#004E59',
        '&:hover': {
            color: 'white',
            backgroundColor: '#004E59',
            transition: 'background-color 0.5s ease'
        }
    }
}



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
        const { username, logOut, classes} = this.props
        const {handleClick} = this
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)
        return( <div>
                { username ? 
                <AppBar style={{backgroundColor: '#004857'}}
                    showMenuIconButton={false}>
                    <Toolbar className={'navMenu'}>
                        <IconButton className={classes.menuButton}
                            aria-label="Menu"
                            >
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
                            <MenuItem className={classes.selected} 
                                onClick={this.handleSelected} 
                                value={0}
                                >Controller
                            </MenuItem>
                            <MenuItem className={classes.selected} 
                                onClick={this.handleSelected} 
                                value={1}
                                >Dashboard
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                    <Title title='/Hou-Smart'/>
                    <Button className={classes.button}
                        onClick={logOut}
                        >
                        LogOut
                    </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavBar))
