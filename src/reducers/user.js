const user = (state = [], action) => {
    switch(action.type){
        case 'SET_USERS':
            return action.payload.map(u => u.username)
        
        default: 
            return state
    }
}

export default user
