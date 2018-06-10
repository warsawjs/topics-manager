import React from 'react';
import { AuthService } from '../services/AuthService';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginError, loginSuccess, restoreSession } from '../../actions/auth.actions';

class AuthCallbackContainer extends React.Component {
    
    componentDidMount() {
        this.props.restoreSession(); //check if logged, dispatch relevant events if success
    
        AuthService.handleAuthentication()
            .then((user) => {
                if (user) this.props.loginSuccess(user);
            })
            .catch(this.props.loginError);
    }
    
    render() {
        return <div/>;
    }
}

AuthCallbackContainer.propTypes = {
    loginSuccess: PropTypes.func,
    loginError: PropTypes.func,
    restoreSession: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    loginError: (error) => dispatch(loginError(error)),
    loginSuccess: (userData) => dispatch(loginSuccess(userData)),
    restoreSession: () => dispatch(restoreSession())
    
});

export default connect(null, mapDispatchToProps)(AuthCallbackContainer);
