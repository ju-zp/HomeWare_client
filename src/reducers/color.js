const color = (state = {
    red: 255,
    green: 255,
    blue: 255
}, action) => {
    switch(action.type){

        case 'SET_COLOR':
            return state

        default: 
            return state
    }
}

export default color