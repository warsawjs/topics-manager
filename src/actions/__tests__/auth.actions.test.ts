import { AnyAction } from 'redux';
import configureMockStore, {
    MockStoreCreator,
    MockStoreEnhanced,
} from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Error } from 'tslint/lib/error';
import { user } from '../../../test-utils/user-factory';
import { RootState } from '../../reducers';
import { AuthService } from '../../shared/services/AuthService';
import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_ERROR,
    LOGIN_REQUEST_SUCCESS,
} from '../action_types';
import {
    loginError,
    loginPending,
    loginSuccess,
    requestLogin,
} from '../auth.actions';

const initialState: RootState = {
    auth: {
        logged: false,
        pending: false,
        user: null,
        error: null,
    },
    topic: {
        pending: false,
        topics: [],
        error: null,
    },
};
type DispatchExts = ThunkDispatch<RootState, undefined, AnyAction>;
const mockStore: MockStoreCreator<RootState, DispatchExts> = configureMockStore<
    RootState,
    DispatchExts
>([thunk]);

describe('auth action creators', () => {
    describe('when login request is called', () => {
        const expectedAction = {
            type: LOGIN_REQUEST,
        };
        it('should create action', () => {
            const action = loginPending();
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when "user logged" action is called', () => {
        const authorizedUser = user();
        const expectedAction = {
            type: LOGIN_REQUEST_SUCCESS,
            payload: authorizedUser,
        };
        it('should create action', () => {
            const action = loginSuccess(authorizedUser);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when "user logged: finished with error', () => {
        const error = new Error('Error');
        const expectedAction = {
            type: LOGIN_REQUEST_ERROR,
            payload: error,
        };
        it('should create action', () => {
            const action = loginError(error);
            expect(action).toEqual(expectedAction);
        });
    });

    describe('when login request action is called', () => {
        let store: MockStoreEnhanced<RootState, DispatchExts>;
        let serviceMock: jest.Mock;

        beforeEach(() => {
            store = mockStore(initialState);
        });

        describe('when AuthService returns an error', () => {
            const fakeError = new Error('Error');

            beforeEach(() => {
                serviceMock = jest
                    .spyOn(AuthService, 'signIn')
                    .mockImplementation(() => Promise.reject(fakeError));
                return store.dispatch(requestLogin());
            });

            afterEach(() => {
                serviceMock.mockReset();
            });

            it('should dispatch LOGIN_REQUEST', () => {
                expect(store.getActions()[0].type).toBe(LOGIN_REQUEST);
            });

            it('should create LOGIN_REQUEST_ERROR action', () => {
                expect(store.getActions()[1].type).toBe(LOGIN_REQUEST_ERROR);
                expect(store.getActions()[1].payload).toBe(fakeError);
            });
        });
    });
});
