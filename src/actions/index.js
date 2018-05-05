import { LOGIN, LOGOUT } from '../actions/action_types'

export const login = () => {
    return {
        type: LOGIN
    }
}
export const logout = () => {
    return {
        type: LOGOUT
    }
}