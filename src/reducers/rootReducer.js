import { combineReducers } from 'redux'
import light from './light'
import color from './color'

const rootReducer = combineReducers({
    light,
    color
})

export default rootReducer