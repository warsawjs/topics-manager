import { LOGIN, LOGOUT } from '../actions/action_types';

const reducer = (state = {}, action) => {
    switch (action.type) {
    case LOGIN:
        return Object.assign({}, state, { loggedUser: true });
    case LOGOUT:
        return Object.assign({}, state, { loggedUser: false });
    default:
        return state;
    }
};

export default reducer;
