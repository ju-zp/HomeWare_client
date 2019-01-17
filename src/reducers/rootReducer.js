import { combineReducers } from 'redux'
import light from './light'
import color from './color'
import page from './page'
import home from './home'
import board from './board'
import lights from './lights'


const rootReducer = combineReducers({
    light,
    color,
    page,
    home, 
    board,
    lights
})

export default rootReducer