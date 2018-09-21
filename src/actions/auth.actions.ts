import { AnyAction } from 'redux';
import { User } from '../shared/models/user';
import { AuthService } from '../shared/services/AuthService';
import {
    LOGIN_REQUEST_ERROR,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_RESTORE_SESSION_REQUEST,
    LOGOUT_REQUEST,
    LOGOUT_REQUEST_ERROR,
    LOGOUT_REQUEST_SUCCESS,
} from './action_types';
import { Dispatch, ThunkResult } from './types';

enum AuthActionId {
    LoginRequest = 'LOGIN_REQUEST',
    LoginRequestSuccess = 'LOGIN_REQUEST_SUCCESS',
    LoginRequestError = 'LOGIN_REQUEST_ERROR',
}

interface AuthAction extends AnyAction {
    type:
        | AuthActionId.LoginRequest
        | AuthActionId.LoginRequestError
        | AuthActionId.LoginRequestSuccess;
}

export const loginPending = (): AuthAction => ({
    type: AuthActionId.LoginRequest,
});

export const requestLogin = () => {
    return (next: Dispatch<AuthAction>) => {
        next(loginPending());
        next(logoutError(''));
        return AuthService.signIn()
            .then(result => {
                next(loginSuccess(result));
            })
            .catch(error => {
                next(loginError(error));
            });
    };
};

export const loginError = (error: any): AnyAction => {
    return {
        type: LOGIN_REQUEST_ERROR,
        payload: error,
    };
};

export const loginSuccess = (user: User): AnyAction => {
    return {
        type: LOGIN_REQUEST_SUCCESS,
        payload: user,
    };
};

export const requestLogout = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(logoutPending());
        AuthService.signOut()
            .then(() => {
                dispatch(logoutSuccess());
            })
            .catch(error => {
                dispatch(logoutError(error));
            });
    };
};

export const logoutPending = () => {
    return {
        type: LOGOUT_REQUEST,
    };
};

export const logoutError = (error: any) => {
    return {
        type: LOGOUT_REQUEST_ERROR,
        payload: error,
    };
};

export const logoutSuccess = () => {
    return {
        type: LOGOUT_REQUEST_SUCCESS,
    };
};

export const restoringSession = (): AnyAction => {
    return {
        type: LOGIN_RESTORE_SESSION_REQUEST,
    };
};

export const restoreSession = (): ThunkResult<void> => {
    return async dispatch => {
        dispatch(restoringSession());
        try {
            const user = await AuthService.getUser();
            const logged = await AuthService.isLogged(user);
            if (logged) {
                dispatch(loginSuccess(user));
            } // else if just 'not logged'
        } catch (err) {
            dispatch(requestLogout()); // force clean up
        }
        // return dispatch(action)
    };
};
