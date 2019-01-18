import { combineReducers } from 'redux'
import light from './light'
import color from './color'
import page from './page'
import home from './home'
import board from './board'
import user from './user'
import weather from './weather'


const rootReducer = combineReducers({
    light,
    color,
    page,
    home, 
    board,
    user,
    weather
})

export default rootReducer