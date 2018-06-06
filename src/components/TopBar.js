import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { connect } from 'react-redux';
import { login, logout } from './../actions/auth.actions';
import Text from './Text';
import Colors from '../styles/Colors';
import PropTypes from 'prop-types';
import Container from '../shared/components/Container';

class TopBar extends React.Component {

    onClick = () => {
        const { loggedUser, login, logout } = this.props;
        const onPressAction = loggedUser ? logout : login;
        onPressAction();
    };

    render() {
        const { loggedUser } = this.props;
        const buttonText = loggedUser ? 'Wyloguj' : 'Zaloguj';
        return (
            <Container backgroundColor={Colors.black} inner={false}>
                <Inner>
                    <Text type="basic" color={ Colors.white } display={ 'inline' }>
                        Zaloguj się przez GitHub
                    </Text>
                    <Button marginLeft='10px' onClick={this.onClick} type="primary">
                        { buttonText }
                    </Button>
                </Inner>
            </Container>
        );
    }
}

TopBar.propTypes = {
    loggedUser: PropTypes.bool,
    login: PropTypes.func,
    logout: PropTypes.func
};

const mapStateToProps = state => ({
    loggedUser: state.auth.loggedUser
});

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
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
