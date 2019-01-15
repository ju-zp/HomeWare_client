import { combineReducers } from 'redux'
import light from './light'
import color from './color'
import interval from './interval'

const rootReducer = combineReducers({
    light,
    color
})

export default rootReducer