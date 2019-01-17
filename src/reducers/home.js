const home = (state = '', action) => {
    switch(action.type){
        case 'SET_HOME':
            return action.payload
        
        default:
            return state
    }
}

export default home