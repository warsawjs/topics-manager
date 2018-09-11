import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    topicMetadata as sampleTopic,
    user as sampleUser,
} from '../../../test-utils/user-factory';
import { initialState } from '../../reducers/topics.reducer';
import { TopicMetadata } from '../../shared/models/topic-metadata';
import { User } from '../../shared/models/user';
import TopicService from '../../shared/services/topic-service';
import {
    MEMBER_LEAVE_REQUEST,
    MEMBER_LEAVE_REQUEST_ERROR,
    MEMBER_LEAVE_REQUEST_SUCCESS,
    MEMBER_SUBMIT_REQUEST,
    MEMBER_SUBMIT_REQUEST_ERROR,
    MEMBER_SUBMIT_REQUEST_SUCCESS,
} from '../action_types';
import {
    becomeMember,
    becomeMemberError,
    becomeMemberInit,
    becomeMemberSucceed,
    leaveTopic,
    leaveTopicError,
    leaveTopicInit,
    leaveTopicSucceed,
} from '../member.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('membership action creators', () => {
    describe('when becoming member of a workshop is called', () => {
        const expectedAction = {
            type: MEMBER_SUBMIT_REQUEST,
        };
        it('should create action', () => {
            const action = becomeMemberInit();
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when successfully becoming member of a workshop is called', () => {
        const expectedAction = {
            type: MEMBER_SUBMIT_REQUEST_SUCCESS,
        };
        it('should create action', () => {
            const action = becomeMemberSucceed();
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when failue of becoming member of a workshop is called', () => {
        const error = new Error('Error');
        const expectedAction = {
            type: MEMBER_SUBMIT_REQUEST_ERROR,
            payload: error,
        };
        it('should create action', () => {
            const action = becomeMemberError(error);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when leaving a workshop is called', () => {
        const expectedAction = {
            type: MEMBER_LEAVE_REQUEST,
        };
        it('should create action', () => {
            const action = leaveTopicInit();
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when successfully left a workshop is called', () => {
        const expectedAction = {
            type: MEMBER_LEAVE_REQUEST_SUCCESS,
        };
        it('should create action', () => {
            const action = leaveTopicSucceed();
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when failure of leaving a workshop is called', () => {
        const error = new Error('Error');
        const expectedAction = {
            type: MEMBER_LEAVE_REQUEST_ERROR,
            payload: error,
        };
        it('should create action', () => {
            const action = leaveTopicError(error);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when become a member action is called', () => {
        let store;
        let serviceMock;
        const user = sampleUser();
        const topic = sampleTopic();

        beforeEach(() => {
            store = mockStore({ topics: initialState });
        });

        describe('when ApiService returns an error', () => {
            const fakeError = new Error('Error');

            beforeEach(() => {
                serviceMock = jest
                    .spyOn(TopicService, 'attend')
                    .mockImplementation(() => Promise.reject(fakeError));
                store.dispatch(becomeMember(topic, user));
            });

            afterEach(() => {
                serviceMock.mockRestore();
            });

            it('should dispatch MEMBER_SUBMIT_REQUEST', () => {
                expect(store.getActions()[0].type).toBe(MEMBER_SUBMIT_REQUEST);
            });

            it('should create MEMBER_SUBMIT_REQUEST_ERROR action', () => {
                expect(store.getActions()[1].type).toBe(
                    MEMBER_SUBMIT_REQUEST_ERROR
                );
                expect(store.getActions()[1].payload).toBe(fakeError);
            });
        });

        describe('when ApiService return confirmation', () => {
            beforeEach(() => {
                serviceMock = jest
                    .spyOn(TopicService, 'attend')
                    .mockImplementation(() => Promise.resolve());
                store.dispatch(becomeMember(topic, user));
            });

            afterEach(() => {
                serviceMock.mockRestore();
            });

            it('should dispatch MEMBER_SUBMIT_REQUEST', () => {
                expect(store.getActions()[0].type).toBe(MEMBER_SUBMIT_REQUEST);
            });

            it('should create MEMBER_SUBMIT_REQUEST_SUCCESS action', () => {
                expect(store.getActions()[1].type).toBe(
                    MEMBER_SUBMIT_REQUEST_SUCCESS
                );
            });
        });
    });

    describe('when leaving a topic action is called', () => {
        let store;
        let serviceMock;
        const user: User = sampleUser();
        const topic: TopicMetadata = sampleTopic();

        beforeEach(() => {
            store = mockStore({ topics: initialState });
        });

        describe('when ApiService returns an error', () => {
            const fakeError = new Error('Error');

            beforeEach(() => {
                serviceMock = jest
                    .spyOn(TopicService, 'leave')
                    .mockImplementation(() => Promise.reject(fakeError));
                store.dispatch(leaveTopic(topic, user));
            });

            afterEach(() => {
                serviceMock.mockRestore();
            });

            it('should dispatch MEMBER_SUBMIT_REQUEST', () => {
                expect(store.getActions()[0].type).toBe(MEMBER_LEAVE_REQUEST);
            });

            it('should create MEMBER_LEAVE_REQUEST_ERROR action', () => {
                expect(store.getActions()[1].type).toBe(
                    MEMBER_LEAVE_REQUEST_ERROR
                );
                expect(store.getActions()[1].payload).toBe(fakeError);
            });
        });

        describe('when ApiService return confirmation', () => {
            beforeEach(() => {
                serviceMock = jest
                    .spyOn(TopicService, 'leave')
                    .mockImplementation(() => Promise.resolve());
                store.dispatch(leaveTopic(topic, user));
            });

            afterEach(() => {
                serviceMock.mockRestore();
            });

            it('should dispatch MEMBER_LEAVE_REQUEST', () => {
                expect(store.getActions()[0].type).toBe(MEMBER_LEAVE_REQUEST);
            });

            it('should create MEMBER_LEAVE_REQUEST_SUCCESS action', () => {
                expect(store.getActions()[1].type).toBe(
                    MEMBER_LEAVE_REQUEST_SUCCESS
                );
            });
        });
    });
});
