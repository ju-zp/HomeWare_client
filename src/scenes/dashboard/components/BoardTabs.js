import React, { Component } from 'react'

import BoardForm from './BoardForm'

import { Tabs, Tab, Button, withStyles, Typography } from '@material-ui/core'

const styles = {
    title: {
        fontSize: '25px',
        color: '#004857'
    }, 
    list: {
        fontSize: '15px',
        color: '#004857'
    },
    button: {
        backgroundColor: '#004E59',
        color: 'white',
        marginTop: '1%',
        '&:hover': {
            color: '#004E59',
            borderColor: '#004E59',
            backgroundColor: '#D3D3D3',
            transition: 'background-color 0.5s ease'
        }
    }
}

class BoardTabs extends Component {

    state = {
        value: 0, 
        show: false
    }

    handleChange = (e, value) => {
        this.setState({value})
    }

    handleClick = () => {
        this.setState({show: true})
    }

    hideForm = () => {
        this.setState({show: false})
        this.props.boardEdit()
        
    }

    renderBoardInfo = (value, board) => {
        const lights = this.props.boards[value].lights
        const temperatures = this.props.boards[value].temperatures
        const { handleClick, hideForm } = this
        const { show } = this.state
        const { classes } = this.props
        return <div key={value} 
            style={{marginTop: '2%'}}>
            <Typography className={classes.title}>
                Lights ({lights.length}): 
            </Typography>
            <ol>
                {lights.map(l => <li key={l.id} 
                    className={classes.list}>
                        Status:
                        {l.switched_on ? 
                            " on"
                            :" off"
                        }
                    </li>)
                }
            </ol>
            <Typography className={classes.title}>
                Temperature Sensors ({temperatures.length}):
            </Typography>
            <ol>
                {temperatures.map(t => <li key={t.id} 
                    className={classes.list}>
                        Interval: {t.interval} seconds
                    </li>)}
            </ol>
            {show 
            ? <BoardForm board={board} 
                hideForm={hideForm}
            /> 
            : <Button className={classes.button} 
                variant='outlined' 
                onClick={handleClick}
                >
                Edit
            </Button>}
        </div>
    }

    render(){
        const { value } = this.state
        const { handleChange } = this
        const { boards, classes } = this.props
        let count = 0
        return <div className='boardTabs'>
            <Typography className={classes.title}>
                Connected devices ({boards.length}):
            </Typography>
            <Tabs value={value} 
                onChange={handleChange}
                >
                {boards.map(board => <Tab className={classes.list}
                    key={board.id} 
                    label={board.name}
                />)
                }
            </Tabs>
            {boards[0] ? 
            value === count && boards.map(b => {
                count++
                return this.renderBoardInfo(value, b)
                })
            : null}
        </div>
    }
}

export default withStyles(styles)(BoardTabs)