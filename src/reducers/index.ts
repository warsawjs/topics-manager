import { combineReducers } from 'redux';
import authReducer, { State as AuthState } from './auth.reducer';
import topicReducer, { State as TopicState } from './topics.reducer';

export interface RootState {
    auth: AuthState;
    topic: TopicState;
}

export default combineReducers<RootState>({
    auth: authReducer,
    topic: topicReducer,
});
