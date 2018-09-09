import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_ERROR,
    LOGIN_REQUEST_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_REQUEST_ERROR,
    LOGOUT_REQUEST_SUCCESS,
} from '../actions/action_types';
import { User } from '../shared/models/user';

export interface State {
    logged: boolean;
    pending: boolean;
    user: User | null;
    error: any;
}

const initialState: State = {
    logged: false,
    pending: false,
    user: null,
    error: null,
};

const reducer = (state: Partial<State> = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, pending: true, error: null };
        case LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                logged: true,
                pending: false,
                user: action.payload,
            };
        case LOGIN_REQUEST_ERROR:
            return {
                ...state,
                logged: false,
                pending: false,
                error: action.payload,
            };
        case LOGOUT_REQUEST:
            return { ...state, pending: true, error: null };
        case LOGOUT_REQUEST_SUCCESS:
            return { ...state, logged: false, pending: false, user: null };
        case LOGOUT_REQUEST_ERROR:
            return { ...state, pending: false, error: action.payload };
        default:
            return state;
    }
};

export default reducer;
export { initialState };
