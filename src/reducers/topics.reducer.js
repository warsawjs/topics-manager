import { TOPICS_GET_REQUEST, TOPICS_GET_REQUEST_ERROR, TOPICS_GET_REQUEST_SUCCESS } from '../actions/action_types';

const initialState = {
    pending: false,
    topics: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case TOPICS_GET_REQUEST:
        return Object.assign({}, state, { pending: true, error: null });
    case TOPICS_GET_REQUEST_SUCCESS:
        return Object.assign({}, state, { pending: false, topics: action.payload, error: null });
    case TOPICS_GET_REQUEST_ERROR:
        return Object.assign({}, state, { pending: false, error: action.payload });
    default:
        return state;
    }
};

export default reducer;
export { initialState };
