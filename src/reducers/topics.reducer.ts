import { AnyAction } from 'redux';
import {
    TOPICS_GET_REQUEST,
    TOPICS_GET_REQUEST_ERROR,
    TOPICS_GET_REQUEST_SUCCESS,
} from '../actions/action_types';
import { TopicMetadata } from '../shared/models/topic-metadata';

export interface State {
    pending: boolean;
    topics: TopicMetadata[];
    error: any;
}

const initialState: State = {
    pending: false,
    topics: [],
    error: null,
};

const reducer = (state: State = initialState, action: AnyAction): State => {
    switch (action.type) {
        case TOPICS_GET_REQUEST:
            return { ...state, pending: true, error: null };
        case TOPICS_GET_REQUEST_SUCCESS:
            return {
                ...state,
                pending: false,
                topics: action.payload,
                error: null,
            };
        case TOPICS_GET_REQUEST_ERROR:
            return { ...state, pending: false, error: action.payload };
        default:
            return state;
    }
};

export default reducer;
export { initialState };
