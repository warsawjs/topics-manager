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

enum AuthAction {
    LoginRequest = 'LOGIN_REQUEST',
    LoginRequestSuccess = 'LOGIN_REQUEST_SUCCESS',
    LoginRequestError = 'LOGIN_REQUEST_ERROR',
}

interface ActionPending {
    type: AuthAction.LoginRequest;
}

export const loginPending = (): ActionPending => {
    return {
        type: AuthAction.LoginRequest,
    };
};

export const requestLogin = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(loginPending());
        AuthService.signIn()
            .then(result => {
                dispatch(loginSuccess(result));
            })
            .catch(error => {
                dispatch(loginError(error));
            });
    };
};

export const loginError = (error: any) => {
    return {
        type: LOGIN_REQUEST_ERROR,
        payload: error,
    };
};

export const loginSuccess = (user: User) => {
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

export const restoringSession = () => {
    return {
        type: LOGIN_RESTORE_SESSION_REQUEST,
    };
};

export const restoreSession = (): ThunkResult<void, any> => {
    return async (dispatch: Dispatch<any>) => {
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
    };
};
