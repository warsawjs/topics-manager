import { AuthService } from '../shared/services/AuthService';
import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_ERROR,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_RESTORE_SESSION_REQUEST,
    LOGOUT_REQUEST,
    LOGOUT_REQUEST_ERROR,
    LOGOUT_REQUEST_SUCCESS,
} from './action_types';

export const requestLogin = () => {
    return dispatch => {
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

export const loginPending = () => {
    return {
        type: LOGIN_REQUEST,
    };
};

export const loginError = error => {
    return {
        type: LOGIN_REQUEST_ERROR,
        payload: error,
    };
};

export const loginSuccess = user => {
    return {
        type: LOGIN_REQUEST_SUCCESS,
        payload: user,
    };
};

export const requestLogout = () => {
    return dispatch => {
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

export const logoutError = error => {
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

export const restoreSession = () => {
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
    };
};
