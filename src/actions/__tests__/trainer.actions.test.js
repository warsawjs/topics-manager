import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    TRAINER_LEAVE_REQUEST,
    TRAINER_LEAVE_REQUEST_ERROR,
    TRAINER_LEAVE_REQUEST_SUCCESS,
    TRAINER_SUBMIT_REQUEST,
    TRAINER_SUBMIT_REQUEST_ERROR,
    TRAINER_SUBMIT_REQUEST_SUCCESS,
} from '../action_types';
import TopicModel from '../../shared/models/TopicModel';
import { initialState } from '../../reducers/topics.reducer';
import TopicService from '../../shared/services/TopicService';
import { GithubUserModel } from '../../shared/models/GithubUserModel';
import {
    becomeTrainer,
    becomeTrainerInit,
    becomeTrainerError,
    becomeTrainerSucceed,
    signOffTrainer,
    signOffTrainerInit,
    signOffTrainerError,
    signOffTrainerSucceed,
} from '../trainer.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('trainer action creators', () => {
    describe('when becoming trainer of a workshop is called', () => {
        const expectedAction = {
            type: TRAINER_SUBMIT_REQUEST,
        };
        it('should create action', () => {
            const action = becomeTrainerInit();
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when successfully becoming trainer of a workshop is called', () => {
        const expectedAction = {
            type: TRAINER_SUBMIT_REQUEST_SUCCESS,
        };
        it('should create action', () => {
            const action = becomeTrainerSucceed();
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when failure of becoming trainer of a workshop is called', () => {
        const error = new Error('Error');
        const expectedAction = {
            type: TRAINER_SUBMIT_REQUEST_ERROR,
            payload: error,
        };
        it('should create action', () => {
            const action = becomeTrainerError(error);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when leaving a workshop is called', () => {
        const expectedAction = {
            type: TRAINER_LEAVE_REQUEST,
        };
        it('should create action', () => {
            const action = signOffTrainerInit();
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when successfully left a workshop is called', () => {
        const expectedAction = {
            type: TRAINER_LEAVE_REQUEST_SUCCESS,
        };
        it('should create action', () => {
            const action = signOffTrainerSucceed();
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when failure of leaving a workshop is called', () => {
        const error = new Error('Error');
        const expectedAction = {
            type: TRAINER_LEAVE_REQUEST_ERROR,
            payload: error,
        };
        it('should create action', () => {
            const action = signOffTrainerError(error);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when become a trainer action is called', () => {
        let store;
        let serviceMock;
        const user = GithubUserModel.fromBackend({ email: 'john@doe.com' });
        const topic = TopicModel.fromBackendData({ name: 'React is cool!' });

        beforeEach(() => {
            store = mockStore({ topics: initialState });
        });

        describe('when ApiService returns an error', () => {
            const fakeError = new Error('Error');

            beforeEach(() => {
                serviceMock = jest
                    .spyOn(TopicService, 'signUpAsTrainer')
                    .mockImplementation(() => Promise.reject(fakeError));
                store.dispatch(becomeTrainer(topic, user));
            });

            afterEach(() => {
                serviceMock.mockRestore();
            });

            it('should dispatch TRAINER_SUBMIT_REQUEST', () => {
                expect(store.getActions()[0].type).toBe(TRAINER_SUBMIT_REQUEST);
            });

            it('should create TRAINER_SUBMIT_REQUEST_ERROR action', () => {
                expect(store.getActions()[1].type).toBe(
                    TRAINER_SUBMIT_REQUEST_ERROR
                );
                expect(store.getActions()[1].payload).toBe(fakeError);
            });
        });

        describe('when ApiService return confirmation', () => {
            beforeEach(() => {
                serviceMock = jest
                    .spyOn(TopicService, 'signUpAsTrainer')
                    .mockImplementation(() => Promise.resolve());
                store.dispatch(becomeTrainer(topic, user));
            });

            afterEach(() => {
                serviceMock.mockRestore();
            });

            it('should dispatch MEMBER_SUBMIT_REQUEST', () => {
                expect(store.getActions()[0].type).toBe(TRAINER_SUBMIT_REQUEST);
            });

            it('should create TRAINER_SUBMIT_REQUEST_SUCCESS action', () => {
                expect(store.getActions()[1].type).toBe(
                    TRAINER_SUBMIT_REQUEST_SUCCESS
                );
            });
        });
    });

    describe('when leaving a topic action is called', () => {
        let store;
        let serviceMock;
        const user = GithubUserModel.fromBackend({ email: 'john@doe.com' });
        const topic = TopicModel.fromBackendData({ name: 'React is cool!' });

        beforeEach(() => {
            store = mockStore({ topics: initialState });
        });

        describe('when ApiService returns an error', () => {
            const fakeError = new Error('Error');

            beforeEach(() => {
                serviceMock = jest
                    .spyOn(TopicService, 'signOffTrainer')
                    .mockImplementation(() => Promise.reject(fakeError));
                store.dispatch(signOffTrainer(topic, user));
            });

            afterEach(() => {
                serviceMock.mockRestore();
            });

            it('should dispatch TRAINER_SUBMIT_REQUEST', () => {
                expect(store.getActions()[0].type).toBe(TRAINER_LEAVE_REQUEST);
            });

            it('should create TRAINER_LEAVE_REQUEST_ERROR action', () => {
                expect(store.getActions()[1].type).toBe(
                    TRAINER_LEAVE_REQUEST_ERROR
                );
                expect(store.getActions()[1].payload).toBe(fakeError);
            });
        });

        describe('when ApiService returns confirmation', () => {
            beforeEach(() => {
                serviceMock = jest
                    .spyOn(TopicService, 'signOffTrainer')
                    .mockImplementation(() => Promise.resolve());
                store.dispatch(signOffTrainer(topic, user));
            });

            afterEach(() => {
                serviceMock.mockRestore();
            });

            it('should dispatch TRAINER_LEAVE_REQUEST', () => {
                expect(store.getActions()[0].type).toBe(TRAINER_LEAVE_REQUEST);
            });

            it('should create TRAINER_LEAVE_REQUEST_SUCCESS action', () => {
                expect(store.getActions()[1].type).toBe(
                    TRAINER_LEAVE_REQUEST_SUCCESS
                );
            });
        });
    });
});
