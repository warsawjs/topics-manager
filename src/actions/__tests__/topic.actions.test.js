import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { topicFetchInit } from '../../actions/topic.actions';
import { TOPICS_GET_REQUEST, TOPICS_GET_REQUEST_SUCCESS, TOPICS_GET_REQUEST_ERROR } from '../action_types';
import TopicModel from '../../shared/models/TopicModel';
import { getTopics, topicsFetched, topicsFetchError } from '../topic.actions';
import { initialState } from '../../reducers/topics.reducer';
import TopicService from '../../shared/services/TopicService';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('topics action creators', () => {
    
    describe('when fetch start is called', () => {
        const expectedAction = {
            type: TOPICS_GET_REQUEST
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
            payload: topics
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
            payload: error
        };
        it('should create action', () => {
            const action = topicsFetchError(error);
            expect(action).toEqual(expectedAction);
        });
    });
    
    describe('when get topics action is called', () => {
        
        let store;
        let serviceMock;
        
        beforeEach(() => {
            store = mockStore({ topics: initialState });
        });
        
        describe('when ApiService returns an error', () => {
            const fakeError = new Error('Error');
            
            beforeEach(() => {
                serviceMock = jest.spyOn(TopicService, 'getSubmittedTopics').mockImplementation(() => Promise.reject(fakeError));
                store.dispatch(getTopics());
            });
            
            afterEach(() => {
                serviceMock.mockRestore();
            });
            
            it('should dispatch TOPICS_GET_REQUEST', () => {
                expect(store.getActions()[0].type).toBe(TOPICS_GET_REQUEST);
            });
            
            it('should create TOPICS_GET_REQUEST_ERROR action', () => {
                expect(store.getActions()[1].type).toBe(TOPICS_GET_REQUEST_ERROR);
                expect(store.getActions()[1].payload).toBe(fakeError);
            });
        });
        
        describe('when ApiService returns the topics', () => {
            const fakeTopics = [TopicModel.fromBackendData({})];
            beforeEach(() => {
                serviceMock = jest.spyOn(TopicService, 'getSubmittedTopics').mockImplementation(() => Promise.resolve(fakeTopics));
                store.dispatch(getTopics());
            });
            
            afterEach(() => {
                serviceMock.mockRestore();
            });
            
            it('should dispatch TOPICS_GET_REQUEST', () => {
                expect(store.getActions()[0].type).toBe(TOPICS_GET_REQUEST);
            });
            
            it('should create TOPICS_GET_REQUEST_SUCCESS action', () => {
                expect(store.getActions()[1].type).toBe(TOPICS_GET_REQUEST_SUCCESS);
                expect(store.getActions()[1].payload).toBe(fakeTopics);
            });
        });
        
    });
});
