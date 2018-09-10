import React from 'react';
import { connect } from 'react-redux';
import { loginError, loginSuccess, restoreSession } from '../../actions/auth.actions';
import { User } from '../models/user';
import { AuthService } from '../services/AuthService';

declare global {
    interface Window {
        location: Location
    }
}

export interface AuthCallbackProps {
    restoreSession: () => undefined,
    loginSuccess: (user: User) => undefined,
    loginError: (error: any) => undefined,
}

class AuthCallbackContainer extends React.Component<AuthCallbackProps> {
    public componentDidMount() {
        this.props.restoreSession(); // check if logged, dispatch relevant events if success

        AuthService.handleAuthentication()
            .then(user => {
                if (user) {
                    this.props.loginSuccess(user);
                    // TODO how to? this.history.push('/');
                    window.location.href = '/';
                }
            })
            .catch(this.props.loginError);
    }

    public render() {
        return <div/>;
    }
}

const mapDispatchToProps = dispatch => ({
    loginError: error => dispatch(loginError(error)),
    loginSuccess: userData => dispatch(loginSuccess(userData)),
    restoreSession: () => dispatch(restoreSession()),
});

export default connect(
    null,
    mapDispatchToProps,
)(AuthCallbackContainer);
