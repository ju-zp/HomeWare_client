import React from 'react'
import { Typography, withStyles, Button } from '@material-ui/core';

const styles = () => ({
    title: {
        fontSize: '25px',
        color: '#004857',
        textAlign: 'center',
        marginTop: '1%'
    },
    text: {
        fontSize: '20px',
        color: '#004857',
        textAlign: 'center'
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
    
})

const Temperature = ({ classes, getTemperature }) => {
    return <div>
        <Typography className={classes.title}>
            Temperature
        </Typography>
        <Button className={classes.button}
            variant='outlined'
            onClick={() => getTemperature()}
        >
            Get
        </Button>
    </div>
}


export default withStyles(styles)(Temperature)