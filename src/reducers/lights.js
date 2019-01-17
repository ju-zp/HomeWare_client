const lights = (state = [], action) => {
    switch(action.type){
        case 'SET_LIGHTS':
            return action.payload
        
        default: 
            return state
    }
}

export default lights