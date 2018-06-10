import {
    LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_ERROR, LOGIN_REQUEST, LOGOUT_REQUEST,
    LOGOUT_REQUEST_SUCCESS, LOGOUT_REQUEST_ERROR
} from '../actions/action_types';

const initialState = {
    logged: false,
    pending: false,
    user: null,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_REQUEST:
        return Object.assign({}, state, { pending: true, error: null });
    case LOGIN_REQUEST_SUCCESS:
        return Object.assign({}, state, { logged: true, pending: false, user: action.payload });
    case LOGIN_REQUEST_ERROR:
        return Object.assign({}, state, { logged: false, pending: false, error: action.payload });
    case LOGOUT_REQUEST:
        return Object.assign({}, state, { pending: true, error: null });
    case LOGOUT_REQUEST_SUCCESS:
        return Object.assign({}, state, { logged: false, pending: false, user: null });
    case LOGOUT_REQUEST_ERROR:
        return Object.assign({}, state, { pending: false, error: action.payload });
    default:
        return state;
    }
};

export default reducer;
export { initialState };
