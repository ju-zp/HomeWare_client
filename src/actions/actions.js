import { SWITCH_ON, SWITCH_OFF, SET_COLOR, SET_INTERVAL_VALUE, CLEAR_INTERVAL_VALUE } from './types'

//light actions
export function switchOn() {
    return { type: SWITCH_ON }
}

export function switchOff() {
    return { type: SWITCH_OFF }
}

//color actions
export function setColor(color){
    return { type: SET_COLOR, payload: color}
}

//interval actions
export function setIntervalValue(value){
    return { type: SET_INTERVAL_VALUE, payload: value}
}

export function clearIntervalValue(){
    return { type: CLEAR_INTERVAL_VALUE }
}

