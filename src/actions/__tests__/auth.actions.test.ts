import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Error } from 'tslint/lib/error';
import { LOGIN_REQUEST, LOGIN_REQUEST_ERROR, LOGIN_REQUEST_SUCCESS } from '../action_types';
import { initialState } from '../../reducers/auth.reducer';
import { loginError, loginPending, loginSuccess, requestLogin } from '../auth.actions';
import { GithubUserModel } from '../../shared/models/GithubUserModel';
import { AuthService } from '../../shared/services/AuthService';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
        const user = GithubUserModel.fromOAuth0({});
        const expectedAction = {
            type: LOGIN_REQUEST_SUCCESS,
            payload: user,
        };
        it('should create action', () => {
            const action = loginSuccess(user);
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

        let store;
        let serviceMock;

        beforeEach(() => {
            store = mockStore({ auth: initialState });
        });

        describe('when AuthService returns an error', () => {
            const fakeError = new Error('Error');

            beforeEach(() => {
                serviceMock = jest.spyOn(AuthService, 'signIn').mockImplementation(() => Promise.reject(fakeError));
                store.dispatch(requestLogin());
            });

            afterEach(() => {
                serviceMock.mockRestore();
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
