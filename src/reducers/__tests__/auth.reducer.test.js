import authReducer, { initialState } from '../auth.reducer';
import {
    loginError,
    loginPending,
    loginSuccess,
    logoutError,
    logoutPending,
    logoutSuccess
} from '../../actions/auth.actions';
import { GithubUserModel } from '../../shared/models/GithubUserModel';

describe('auth reducer', () => {
    
    it('should have initial state', () => {
        const authState = authReducer(undefined, {});
        expect(authState).toBe(initialState);
    });
    
    describe('when login action is submitted', () => {
        const authState = authReducer({ pending: false, error: new Error('FakeError') }, loginPending());
        it('should change state to pending if login action was submitted', () => {
            expect(authState.pending).toBe(true);
        });
        
        it('should clear the errors', () => {
            expect(authState.error).toBe(null);
        });
    });
    
    describe('when error received', () => {
        const error = new Error('test');
        const authState = authReducer({ pending: true }, loginError(error));
        
        it('should change state to error if received one', () => {
            expect(authState.error).toBe(error);
        });
        
        it('should clear pending state', () => {
            expect(authState.pending).toBe(false);
        });
    });
    
    describe('when user logged in', () => {
        const payload = GithubUserModel.fromOAuth0({});
        const authState = authReducer({ pending: true }, loginSuccess(payload));
        
        it('should contain user data', () => {
            expect(authState.user).toBe(payload);
        });
        
        it('should clear pending state', () => {
            expect(authState.pending).toBe(false);
        });
        
        it('should be logged', () => {
            expect(authState.logged).toBe(true);
        });
    });
    
    describe('when logout action is submitted', () => {
        const payload = GithubUserModel.fromOAuth0({});
        const authState = authReducer({
            pending: false,
            user: payload,
            logged: true,
            error: new Error('fake')
        }, logoutPending(payload));
        
        it('should change state to pending', () => {
            expect(authState.pending).toBe(true);
        });
        
        it('should not remove user until logout is confirmed', () => {
            expect(authState.user).toBe(payload);
        });
        
        it('should not change \'logged\' status yet', () => {
            expect(authState.logged).toBe(true);
        });
        
        it('should clear the errors', () => {
            expect(authState.error).toBe(null);
        });
    });
    
    describe('when logout was successful', () => {
        const payload = GithubUserModel.fromOAuth0({});
        const authState = authReducer({ pending: true, user: payload, logged: true }, logoutSuccess(payload));
        
        it('should not be pending any longer', () => {
            expect(authState.pending).toBe(false);
        });
        
        it('should remove user', () => {
            expect(authState.user).toBe(null);
        });
        
        it('should no longer be logged', () => {
            expect(authState.logged).toBe(false);
        });
    });
    
    describe('when logout failed', () => {
        const user = GithubUserModel.fromOAuth0({});
        const error = new Error('Test Error');
        const authState = authReducer({ pending: true, user, logged: true }, logoutError(error));
        
        it('should not be pending any longer', () => {
            expect(authState.pending).toBe(false);
        });
        
        it('should not remove user', () => {
            expect(authState.user).toBe(user);
        });
        
        it('should still be logged', () => {
            expect(authState.logged).toBe(true);
        });
        
        it('should contain error', () => {
            expect(authState.error).toBe(error);
        });
    });
    
});
