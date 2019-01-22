import React, { Component } from 'react'

import { Tabs, Tab, Typography, withStyles } from '@material-ui/core'

import SmallGraph from '../components/SmallGraph';
import LargeGraph from '../components/LargeGraph'

const styles = {
    title: {
        fontSize: '25px',
        color: '#004857',
        marginLeft: '5%',
        marginTop: '2%'
    },
    list: {
        fontSize: '15px',
        color: '#004857'
    }
}

class Temperature extends Component {

    state = {
        value: 0
    }

    onChange = (e, value) => {
        this.setState({value})
    }

    render(){
        const { value } = this.state
        const { onChange } = this
        const { classes } = this.props
        return <div className='temperatureContainer'>
            <Typography className={classes.title}>
                Temperature
            </Typography>
            <Tabs value={value} 
                onChange={onChange}
                >
                <Tab className={classes.list} 
                    label='Last 15 mins'>
                </Tab>
                <Tab className={classes.list} 
                    label='Last hour'>
                </Tab>
            </Tabs>
            {value === 0 &&  <SmallGraph />}
            {value === 1 && <LargeGraph />}
        </div>
    }
}

export default withStyles(styles)(Temperature)