import { combineReducers } from 'redux'
import light from './light'
import color from './color'
import page from './page'


const rootReducer = combineReducers({
    light,
    color,
    page
})

export default rootReducer