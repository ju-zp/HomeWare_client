import { SWITCH_ON, SWITCH_OFF, SET_COLOR, SET_PAGE, SET_HOME, SET_BOARDS } from './types'

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

//page actions
export function setPage(page){
    return { type: SET_PAGE, payload: page}
}

//home actions
export function setHome(home){
    return { type: SET_HOME, payload: home}
}

//board actions
export function setBoard(boards){
    return { type: SET_BOARDS, payload: boards}
}


