import React, { Component } from 'react'

import { Typography, withStyles} from '@material-ui/core'

import Environment from './Environment'
import Temperature from './Temperature'
import Weather from './Weather'

const styles = {
    title: {
        fontSize: '35px',
        color: 'white',
        marginLeft: '5%',
        marginTop: '1%'
    }
}


class Dashboard extends Component {

    render(){
        const { classes } = this.props
        return <div>
            <Typography className={classes.title}>
                Dashboard
            </Typography>
            <Environment/>
            <Temperature/>
            <Weather />
        </div>
    }
}





export default withStyles(styles)(Dashboard)