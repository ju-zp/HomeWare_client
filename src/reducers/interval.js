const interval = (state = 0, action) => {
    switch(action.type){

        case 'SET_INTERVAL_VALUE':
            return action.payload

        case 'CLEAR_INTERVAL_VALUE':
            return 0

        default: 
            return 0
    }
}

export default interval