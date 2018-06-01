import topicReducer, { initialState } from '../topics.reducer';
import { topicFetchInit, topicsFetched, topicsFetchError } from '../../actions/topic.actions';
import TopicModel from '../../shared/models/TopicModel';

describe('topics reducer', () => {
    
    it('should have initial state', () => {
        const topicState = topicReducer(undefined, {});
        expect(topicState).toBe(initialState);
    });
    
    it('should change state to pending', () => {
        const topicState = topicReducer(undefined, topicFetchInit());
        expect(topicState.pending).toBe(true);
    });
    
    describe('error received', () => {
        const error = new Error('test');
        const topicState = topicReducer({ pending: true }, topicsFetchError(error));
        
        it('should change state to error if received one', () => {
            expect(topicState.error).toBe(error);
        });
        
        it('should clear pending state', () => {
            expect(topicState.pending).toBe(false);
        });
    });
    
    describe('payload received', () => {
        const payload = [TopicModel.fromBackendData({})];
        const topicState = topicReducer({pending: true}, topicsFetched(payload));
    
        it('should contain topics if received some', () => {
            expect(topicState.topics).toBe(payload);
        });
    
        it('should clear pending state', () => {
            expect(topicState.pending).toBe(false);
        });
    });
    
    describe('state consistency on new fetch', () => {
        const payload = [TopicModel.fromBackendData({})];
        const topicState = topicReducer({topics: payload}, topicFetchInit());
        
        it('should not remove existing topics', () => {
            expect(topicState.topics).toBe(payload);
            expect(topicState.pending).toBe(true);
        });
    });
    
});
