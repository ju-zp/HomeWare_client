const light = (state = false, action) => {
    switch(action.type) {

        case 'SWITCH_ON':
            return state = true

        case 'SWITCH_OFF':
            return state = false

        default:
            return state
    }
}