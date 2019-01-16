import { combineReducers } from 'redux'
import light from './light'
import color from './color'
import page from './page'
import home from './home'


const rootReducer = combineReducers({
    light,
    color,
    page,
    home
})

export default rootReducer