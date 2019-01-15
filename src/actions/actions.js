import { SWITCH_ON, SWITCH_OFF } from './types'

export function switchOn() {
    return { type: SWITCH_ON }
}

export function switchOff() {
    return { type: SWITCH_OFF }
}