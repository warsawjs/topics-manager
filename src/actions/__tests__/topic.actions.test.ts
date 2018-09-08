import TopicModel from '../../shared/models/TopicModel';
import {
    TOPICS_GET_REQUEST,
    TOPICS_GET_REQUEST_ERROR,
    TOPICS_GET_REQUEST_SUCCESS,
} from '../action_types';
import {
    topicFetchInit,
    topicsFetched,
    topicsFetchError,
} from '../topic.actions';

describe('topics action creators', () => {
    describe('when fetch start is called', () => {
        const expectedAction = {
            type: TOPICS_GET_REQUEST,
        };
        it('should create action', () => {
            const action = topicFetchInit();
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when fetch finished action is called', () => {
        const topics = [TopicModel.fromBackendData({})];
        const expectedAction = {
            type: TOPICS_GET_REQUEST_SUCCESS,
            payload: topics,
        };
        it('should create action', () => {
            const action = topicsFetched(topics);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when fetch finished with error action is called', () => {
        const error = new Error('Error');
        const expectedAction = {
            type: TOPICS_GET_REQUEST_ERROR,
            payload: error,
        };
        it('should create action', () => {
            const action = topicsFetchError(error);
            expect(action).toEqual(expectedAction);
        });
    });
});
