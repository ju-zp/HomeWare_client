const light = (state = false, action) => {
    switch(action.type) {

        case 'SWITCH_ON':
            return true

        case 'SWITCH_OFF':
            return false

        default:
            return state
    }
}
 export default light
