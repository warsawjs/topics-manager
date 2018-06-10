import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { connect } from 'react-redux';
import Text from './Text';
import Colors from '../styles/Colors';
import PropTypes from 'prop-types';
import Container from '../shared/components/Container';
import { requestLogin, requestLogout } from '../actions/auth.actions';
import ActivityIndicator from '../shared/components/ActivityIndicator';
//TODO make some AppError model and HelloGHError model (extends AppError)
class TopBar extends React.Component {

    onClick = () => {
        const { logged, requestLogout, requestLogin } = this.props;
        const onPressAction = logged ? requestLogout : requestLogin;
        onPressAction();
    };

    render() {
        const { logged, pending, user, error } = this.props;
        const buttonText = logged ? 'Wyloguj' : 'Zaloguj';
        return (
            <Container backgroundColor={Colors.black} inner={false}>
                <Inner>
                    <Text type="basic" color={ Colors.white } display={ 'inline' }>
                        {!logged && 'Zaloguj się'}
                        {logged && user && user.email}
                    </Text>
                    {pending && <ActivityIndicator/>}
                    {error && <p>Błąd: {JSON.stringify(error)}</p>}
                    <Button marginLeft='10px' onClick={this.onClick} type="primary">
                        { buttonText }
                    </Button>
                </Inner>
            </Container>
        );
    }
}

TopBar.propTypes = {
    logged: PropTypes.bool,
    pending: PropTypes.bool,
    error: PropTypes.any,
    user: PropTypes.any,
    requestLogin: PropTypes.func,
    requestLogout: PropTypes.func
};

const mapStateToProps = state => ({
    logged: state.auth.logged,
    pending: state.auth.pending,
    user: state.auth.user,
    error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
    requestLogin: () => dispatch(requestLogin()),
    requestLogout: () => dispatch(requestLogout())
});

const Inner = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 7px;
    color: ${Colors.white};
`;

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
