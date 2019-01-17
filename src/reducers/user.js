const user = (state = [], action) => {
    switch(action.type){
        case 'SET_USERS':
            return action.type.map(u => u.username)
        
        default: 
            state
    }
}
