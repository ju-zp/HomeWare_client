import React, { Component } from 'react'

import { Button, withStyles, Typography } from '@material-ui/core';
import UserForm from './UserForm'
import API from '../../../APIs/API'

const styles = {
    title: {
        fontSize: '25px',
        color: '#004857'
    },
    listItem: {
        fontSize: '15px',
        color: '#004857',
        listStyleType: 'none'
    }, 
    button: {
        backgroundColor: '#004E59',
        color: 'white',
        marginTop: '1%',
        marginLeft: '5%',
        width: '150%',
        '&:hover': {
            color: '#004E59',
            borderColor: '#004E59',
            backgroundColor: '#D3D3D3',
            transition: 'background-color 0.5s ease'
        }
    },
    delete: {
        backgroundColor: '#004E59',
        color: 'white',
        marginTop: '1%',
        marginLeft: '50%',
        '&:hover': {
            color: '#004E59',
            borderColor: '#004E59',
            backgroundColor: '#D3D3D3',
            transition: 'background-color 0.5s ease'
        }
    }
}



class Users extends Component{

    state = {
        show: false
    }

    handleClick = username => {
        API.deleteUser(username).then(data => {
            this.props.getUsers()
        })
    }

    handleShow = () => {
        this.setState({show: true})
    }

    hideForm = () => {
        this.setState({show: false})
        this.props.getUsers()
    }

    render(){
        const { handleClick, handleShow, hideForm } = this
        const { users, classes } = this.props
        const { show } = this.state
        return <div className='usersContainer'>
            <Typography className={classes.title}>Users:</Typography>
            <ul>
                {users.map(u => <li key={u} 
                        className={classes.listItem}
                        >

                        {u} 
                        {u === 'admin' 
                            ? null 
                            : <Button className={classes.delete} variant='outlined' onClick={() => handleClick(u)}

                                >
                                Delete
                            </Button>
                        }
                        </li>
                )}
            </ul>
            {show ? 
                <UserForm hideForm={hideForm}/> 
                : <Button className={classes.button}
                    variant='outlined'
                    onClick={handleShow}
                    >
                    Add Users
                </Button>
            }  
        </div>
    }
}

export default withStyles(styles)(Users)
